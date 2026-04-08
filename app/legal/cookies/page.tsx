import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Política de cookies
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Última actualización: abril de 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section aria-labelledby="cookies-que">
          <h2 id="cookies-que" className="text-xl font-semibold text-foreground">
            1. ¿Qué son las cookies?
          </h2>
          <p className="mt-3">
            Las cookies son pequeños archivos que los sitios web pueden almacenar
            en su dispositivo (ordenador, tablet o móvil) cuando los visita. Sirven,
            entre otras cosas, para que el sitio funcione correctamente, recordar
            preferencias o, en otros casos, medir el uso o mostrar publicidad.
          </p>
        </section>

        <section aria-labelledby="cookies-uso">
          <h2 id="cookies-uso" className="text-xl font-semibold text-foreground">
            2. Qué utiliza este sitio (StudioKodax)
          </h2>
          <p className="mt-3">
            En la configuración actual de este sitio web, desarrollado con{" "}
            <strong className="text-foreground">Next.js</strong>, se prioriza el
            uso de{" "}
            <strong className="text-foreground">
              cookies o almacenamientos estrictamente necesarios
            </strong>{" "}
            para el funcionamiento técnico de la aplicación (por ejemplo,
            mecanismos de seguridad o optimización propios del framework durante la
            navegación). Estas cookies no se emplean para publicidad comportamental
            ni para crear perfiles comerciales en terceros.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">
              No se han integrado, en el código base actual, herramientas de
              analítica de terceros (como Google Analytics) ni pixels de redes
              sociales
            </strong>{" "}
            que depositen cookies de seguimiento en su navegador. Si en el futuro se
            incorporan, se actualizará esta política, se detallará cada cookie y, en
            su caso, se solicitará su consentimiento previo conforme a la normativa
            aplicable.
          </p>
        </section>

        <section aria-labelledby="cookies-formulario">
          <h2
            id="cookies-formulario"
            className="text-xl font-semibold text-foreground"
          >
            3. Formulario de contacto y terceros
          </h2>
          <p className="mt-3">
            El{" "}
            <Link href="/contacto" className="text-foreground underline">
              formulario de contacto
            </Link>{" "}
            envía los datos que usted introduce a los servidores de este sitio;
            el correo se entrega mediante el proveedor{" "}
            <strong className="text-foreground">Resend</strong> como encargado del
            tratamiento (véase la{" "}
            <Link href="/legal/privacidad" className="text-foreground underline">
              política de privacidad
            </Link>
            ). Ese proceso{" "}
            <strong className="text-foreground">
              no implica que Resend deposite cookies en su navegador
            </strong>{" "}
            solo por rellenar o enviar el formulario; el tratamiento descrito es
            el relativo al envío del mensaje por correo electrónico.
          </p>
        </section>

        <section aria-labelledby="cookies-gestion">
          <h2
            id="cookies-gestion"
            className="text-xl font-semibold text-foreground"
          >
            4. Cómo gestionar o desactivar cookies
          </h2>
          <p className="mt-3">
            Puede configurar su navegador para bloquear o eliminar cookies. Tenga en
            cuenta que desactivar cookies técnicas estrictamente necesarias puede
            afectar al correcto funcionamiento de algunas partes del sitio.
          </p>
          <p className="mt-3">
            Enlaces orientativos a la ayuda de los navegadores más habituales:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="cookies-mas">
          <h2 id="cookies-mas" className="text-xl font-semibold text-foreground">
            5. Más información
          </h2>
          <p className="mt-3">
            Para información sobre el tratamiento de datos personales derivado del
            uso del sitio y del formulario, consulte la{" "}
            <Link href="/legal/privacidad" className="text-foreground underline">
              política de privacidad
            </Link>
            .
          </p>
        </section>

      </div>
    </article>
  );
}
