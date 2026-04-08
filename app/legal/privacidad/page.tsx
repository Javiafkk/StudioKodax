import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Última actualización: abril de 2026 · RGPD y LOPDGDD
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section aria-labelledby="priv-responsable">
          <h2
            id="priv-responsable"
            className="text-xl font-semibold text-foreground"
          >
            1. Responsable del tratamiento
          </h2>
          <p className="mt-3">
            El responsable del tratamiento de los datos personales obtenidos a
            través de este sitio web es{" "}
            <strong className="text-foreground">StudioKodax</strong>, identificado en
            el{" "}
            <Link href="/legal/aviso-legal" className="text-foreground underline">
              aviso legal
            </Link>
            . Debe completarse allí la identificación fiscal y de contacto
            conforme a la normativa aplicable.
          </p>
        </section>

        <section aria-labelledby="priv-finalidad">
          <h2
            id="priv-finalidad"
            className="text-xl font-semibold text-foreground"
          >
            2. Datos que se tratan y finalidad
          </h2>
          <p className="mt-3">
            A través del{" "}
            <Link href="/contacto" className="text-foreground underline">
              formulario de contacto
            </Link>{" "}
            se solicitan, según los campos habilitados:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Nombre</strong> — para
              dirigirnos a usted e identificar la solicitud.
            </li>
            <li>
              <strong className="text-foreground">Dirección de correo
              electrónico</strong> — para responder a su consulta; también se
              utiliza como dirección de respuesta (&ldquo;Reply-To&rdquo;) en el
              correo generado al enviar el formulario.
            </li>
            <li>
              <strong className="text-foreground">Sitio web actual
              (opcional)</strong> — para contextualizar su proyecto o necesidad
              técnica.
            </li>
            <li>
              <strong className="text-foreground">Mensaje</strong> — contenido
              libre de su consulta o propuesta.
            </li>
          </ul>
          <p className="mt-3">
            <strong className="text-foreground">Finalidad:</strong> gestionar su
            solicitud de información o contacto profesional, mantener la
            comunicación necesaria al efecto y, en su caso, adoptar medidas
            precontractuales a petición suya.
          </p>
          <p className="mt-3">
            No se utilizan estos datos para elaborar perfiles automatizados ni
            para finalidades distintas de las indicadas, salvo obligación legal
            o nueva base legitimadora debidamente comunicada.
          </p>
        </section>

        <section aria-labelledby="priv-base">
          <h2 id="priv-base" className="text-xl font-semibold text-foreground">
            3. Base jurídica
          </h2>
          <p className="mt-3">
            El tratamiento se basa en el{" "}
            <strong className="text-foreground">
              artículo 6.1.b) del Reglamento (UE) 2016/679 (RGPD)
            </strong>
            : tratamiento necesario para la adopción, a petición del interesado,
            de medidas precontractuales o para la gestión de una solicitud de
            información previa a un posible encargo profesional. Cuando aplique,
            también podrá apoyarse en su{" "}
            <strong className="text-foreground">consentimiento</strong> (art.
            6.1.a) manifestado al enviar voluntariamente el formulario.
          </p>
        </section>

        <section aria-labelledby="priv-destinatarios">
          <h2
            id="priv-destinatarios"
            className="text-xl font-semibold text-foreground"
          >
            4. Destinatarios y encargados del tratamiento
          </h2>
          <p className="mt-3">
            Para que el mensaje del formulario llegue por correo electrónico al
            titular del sitio, los datos introducidos se transmiten de forma
            segura al servicio de{" "}
            <strong className="text-foreground">Resend, Inc.</strong> (proveedor
            de envío de correo transaccional), con sede en los Estados Unidos,
            que actúa como{" "}
            <strong className="text-foreground">encargado del tratamiento</strong>{" "}
            en los términos del artículo 28 del RGPD, en el marco de las
            condiciones contractuales tipo (cláusulas contractuales tipo u otras
            garantías aceptadas por la Comisión Europea) aplicables a
            transferencias internacionales.
          </p>
          <p className="mt-3">
            Puede consultar la política de privacidad de Resend en{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline"
            >
              resend.com/legal/privacy-policy
            </a>
            . Resend trata los datos estrictamente para la prestación del
            servicio de entrega de correo y según sus propias políticas.
          </p>
          <p className="mt-3">
            No se ceden datos a otros terceros, salvo obligación legal o requerimiento
            de autoridades competentes.
          </p>
        </section>

        <section aria-labelledby="priv-plazo">
          <h2 id="priv-plazo" className="text-xl font-semibold text-foreground">
            5. Plazo de conservación
          </h2>
          <p className="mt-3">
            Los datos se conservarán el tiempo necesario para atender su consulta
            y, en su caso, mantener la relación precontractual o contractual
            derivada. Transcurrido ese plazo, podrán conservarse bloqueados
            durante los plazos legales aplicables (p. ej. responsabilidades
            mercantiles o tributarias) y, posteriormente, suprimirse con medidas
            adecuadas.
          </p>
        </section>

        <section aria-labelledby="priv-derechos">
          <h2
            id="priv-derechos"
            className="text-xl font-semibold text-foreground"
          >
            6. Derechos del interesado
          </h2>
          <p className="mt-3">
            Puede ejercer los derechos de{" "}
            <strong className="text-foreground">acceso, rectificación,
            supresión, limitación del tratamiento, portabilidad y oposición</strong>{" "}
            cuando proceda, dirigiéndose al responsable a través del{" "}
            <Link href="/contacto" className="text-foreground underline">
              formulario de contacto
            </Link>{" "}
            u otro canal que tenga publicado en el aviso legal, acreditando su
            identidad de forma razonable.
          </p>
          <p className="mt-3">
            Tiene derecho a presentar una reclamación ante la{" "}
            <strong className="text-foreground">
              Agencia Española de Protección de Datos (AEPD)
            </strong>
            ,{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline"
            >
              www.aepd.es
            </a>
            , si considera que el tratamiento no se ajusta a la normativa.
          </p>
        </section>

        <section aria-labelledby="priv-seguridad">
          <h2
            id="priv-seguridad"
            className="text-xl font-semibold text-foreground"
          >
            7. Seguridad
          </h2>
          <p className="mt-3">
            Se aplican medidas técnicas y organizativas razonables para proteger
            los datos frente a accesos no autorizados, pérdida o alteración. El
            envío del formulario se realiza mediante conexión cifrada (HTTPS) y el
            procesamiento en servidor evita exponer claves de servicios externos
            al navegador del visitante.
          </p>
        </section>

        <section aria-labelledby="priv-menores">
          <h2 id="priv-menores" className="text-xl font-semibold text-foreground">
            8. Menores de edad
          </h2>
          <p className="mt-3">
            Este sitio no está dirigido a menores de catorce años. Si tiene
            conocimiento de que se han recogido datos de un menor sin el
            consentimiento parental correspondiente, rogamos que contacte para
            proceder a su supresión.
          </p>
        </section>

        <section aria-labelledby="priv-cambios">
          <h2 id="priv-cambios" className="text-xl font-semibold text-foreground">
            9. Cambios en esta política
          </h2>
          <p className="mt-3">
            StudioKodax podrá modificar esta política para adaptarla a novedades
            legislativas o a cambios en los tratamientos (por ejemplo, nuevos
            proveedores o finalidades). Se indicará la fecha de actualización en
            la parte superior del documento.
          </p>
        </section>

        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          Documento orientativo. Un abogado especializado puede afinar la base
          jurídica, el plazo de conservación y las cláusulas según su situación
          concreta (autónomo, sociedad, volumen de datos, etc.).
        </p>
      </div>
    </article>
  );
}
