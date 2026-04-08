import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Aviso legal
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Última actualización: abril de 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section aria-labelledby="aviso-identificacion">
          <h2
            id="aviso-identificacion"
            className="text-xl font-semibold text-foreground"
          >
            1. Datos identificativos
          </h2>
          <p className="mt-3">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se informa de los siguientes datos:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Denominación / marca:</strong>{" "}
              StudioKodax
            </li>
            <li>
              <strong className="text-foreground">
                Titular :
              </strong>{" "}
              StudioKodax
            </li>
            <li>
              <strong className="text-foreground">Correo de contacto:</strong>{" "}
              a través del{" "}
              <Link href="/contacto" className="text-foreground underline">
                formulario de contacto
              </Link>{" "}
              publicado en este sitio web.
            </li>
          </ul>
        </section>

        <section aria-labelledby="aviso-objeto">
          <h2 id="aviso-objeto" className="text-xl font-semibold text-foreground">
            2. Objeto
          </h2>
          <p className="mt-3">
            El presente sitio web tiene por objeto dar a conocer los servicios
            profesionales de desarrollo web y optimización técnica / SEO
            ofrecidos bajo la marca StudioKodax, así como facilitar canales de
            contacto con potenciales clientes o colaboradores.
          </p>
        </section>

        <section aria-labelledby="aviso-condiciones">
          <h2
            id="aviso-condiciones"
            className="text-xl font-semibold text-foreground"
          >
            3. Condiciones de uso
          </h2>
          <p className="mt-3">
            El acceso y uso del sitio web atribuye la condición de usuario e
            implica la aceptación de este aviso legal y, en su caso, de la
            política de privacidad y de cookies. El usuario se compromete a
            utilizar el sitio de conformidad con la ley, la buena fe y el orden
            público.
          </p>
        </section>

        <section aria-labelledby="aviso-propiedad">
          <h2
            id="aviso-propiedad"
            className="text-xl font-semibold text-foreground"
          >
            4. Propiedad intelectual e industrial
          </h2>
          <p className="mt-3">
            Los contenidos de este sitio (textos, imágenes, diseño, logotipos,
            código y estructura) son titularidad de StudioKodax o de terceros que
            han autorizado su uso, salvo indicación expresa en contrario. Queda
            prohibida su reproducción, distribución o comunicación pública sin
            autorización previa, salvo para uso privado o los supuestos
            permitidos por la normativa vigente.
          </p>
        </section>

        <section aria-labelledby="aviso-responsabilidad">
          <h2
            id="aviso-responsabilidad"
            className="text-xl font-semibold text-foreground"
          >
            5. Responsabilidad
          </h2>
          <p className="mt-3">
            StudioKodax no se hace responsable de los daños derivados del uso
            indebido del sitio, de interrupciones técnicas ajenas a su control o
            del contenido de sitios enlazados. Los enlaces a terceros se ofrecen
            a efectos informativos, sin que ello suponga respaldo comercial o
            responsabilidad sobre sus contenidos.
          </p>
        </section>

        <section aria-labelledby="aviso-ley">
          <h2 id="aviso-ley" className="text-xl font-semibold text-foreground">
            6. Legislación y jurisdicción
          </h2>
          <p className="mt-3">
            Las relaciones derivadas del uso de este sitio se rigen por la
            legislación española. Para cualquier controversia, las partes se
            someten a los juzgados y tribunales del domicilio del usuario si
            actúa como consumidor; en caso contrario, a los de España, salvo
            norma imperativa en contrario.
          </p>
        </section>

      </div>
    </article>
  );
}
