"use server";

import { Resend } from "resend";

export type ContactFormState = {
  ok: boolean;
  error: string | null;
};

const initialState: ContactFormState = { ok: false, error: null };

const MAX_LEN = {
  nombre: 120,
  email: 254,
  web: 500,
  mensaje: 5000,
} as const;

/** Tiempo mínimo entre carga del formulario y envío (anti-bots sin JS). */
const MIN_SUBMIT_MS = 2_000;
/** Formulario demasiado antiguo (evita reenvíos con timestamp fijo). */
const MAX_SUBMIT_MS = 2 * 60 * 60 * 1000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalUrl(value: string): boolean {
  if (!value.trim()) return true;
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

/** Evita saltos de línea en cabeceras de correo. */
function singleLine(value: string, max: number): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

/** Mensaje seguro para el usuario cuando Resend devuelve errores típicos de configuración. */
function resendErrorHintForUser(error: unknown): string | null {
  if (typeof error !== "object" || error === null) return null;
  const rec = error as { name?: string; message?: string };
  const name = rec.name ?? "";
  const message = (rec.message ?? "").toLowerCase();

  if (name === "invalid_from_address") {
    return "El remitente no está autorizado en Resend: verifica el dominio en resend.com y usa en RESEND_FROM una dirección de ese dominio.";
  }
  if (name === "missing_api_key" || name === "invalid_api_Key") {
    return "La clave de Resend no es válida o no llega al servidor. Revisa RESEND_API_KEY en Vercel y haz redeploy.";
  }
  if (name === "rate_limit_exceeded") {
    return "Demasiados envíos en poco tiempo. Espera unos minutos e inténtalo de nuevo.";
  }
  if (
    name === "validation_error" &&
    (message.includes("only send") ||
      message.includes("testing") ||
      message.includes("verified") ||
      message.includes("recipient"))
  ) {
    return "Resend limita destinatarios hasta verificar el dominio de envío. Verifica studiokodax.com en Resend o usa el correo permitido en modo prueba.";
  }
  return null;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("departamento") ?? "").trim();
  if (honeypot.length > 0) {
    return { ok: true, error: null };
  }

  const startedRaw = formData.get("formStartedAt");
  const startedAt =
    typeof startedRaw === "string" ? Number.parseInt(startedRaw, 10) : NaN;
  if (!Number.isFinite(startedAt)) {
    return {
      ok: false,
      error: "No se pudo validar el envío. Recarga la página e inténtalo de nuevo.",
    };
  }
  const elapsed = Date.now() - startedAt;
  if (elapsed < MIN_SUBMIT_MS) {
    return {
      ok: false,
      error: "Espera un momento antes de enviar (protección anti-spam).",
    };
  }
  if (elapsed > MAX_SUBMIT_MS) {
    return {
      ok: false,
      error: "El formulario lleva demasiado tiempo abierto. Recarga la página.",
    };
  }

  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const web = String(formData.get("web") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  if (!nombre || nombre.length > MAX_LEN.nombre) {
    return { ok: false, error: "Indica un nombre válido." };
  }
  if (!email || email.length > MAX_LEN.email || !isValidEmail(email)) {
    return { ok: false, error: "Indica un email válido." };
  }
  if (web.length > MAX_LEN.web || !isValidOptionalUrl(web)) {
    return { ok: false, error: "La URL de la web no es válida." };
  }
  if (!mensaje || mensaje.length > MAX_LEN.mensaje) {
    return { ok: false, error: "Escribe un mensaje (máx. 5000 caracteres)." };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const from = process.env.RESEND_FROM?.trim() ?? "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? "";

  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");
  if (!from) missing.push("RESEND_FROM");
  if (!to) missing.push("CONTACT_TO_EMAIL");

  if (missing.length > 0) {
    console.error(
      `Faltan variables de entorno: ${missing.join(", ")}. ¿Está .env.local en la raíz del proyecto y reiniciaste "npm run dev"?`,
    );
    const devHint =
      process.env.NODE_ENV === "development"
        ? ` Comprueba .env.local (${missing.join(", ")}). Reinicia el servidor.`
        : "";
    return {
      ok: false,
      error:
        "El envío no está configurado en el servidor. Revisa las variables de entorno." +
        devHint,
    };
  }

  const resend = new Resend(apiKey);
  const safeNombre = singleLine(nombre, MAX_LEN.nombre);

  const text = [
    `Nuevo mensaje desde el formulario de contacto`,
    ``,
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    web ? `Web: ${web}` : `Web: (no indicada)`,
    ``,
    `Mensaje:`,
    mensaje,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Web] Contacto de ${safeNombre}`,
    text,
  });

  if (error) {
    console.error(
      "Resend error:",
      typeof error === "object" && error !== null
        ? JSON.stringify(error)
        : String(error),
    );
    const hint = resendErrorHintForUser(error);
    return {
      ok: false,
      error:
        hint ??
        "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    };
  }

  return { ...initialState, ok: true, error: null };
}
