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

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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
      `Faltan variables de entorno: ${missing.join(", ")}. ¿Está .env.local en la raíz del proyecto y reiniciaste "npm run dev"?`
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
    subject: `[Web] Contacto de ${nombre}`,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
    };
  }

  return { ...initialState, ok: true, error: null };
}
