"use client";

import { useFormState } from "react-dom";
import * as React from "react";

import {
  sendContactEmail,
  type ContactFormState,
} from "@/lib/actions/contact-email";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { ContactFormSubmit } from "./contact-form-submit";

const initialState: ContactFormState = { ok: false, error: null };

export function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@empresa.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="web">Web actual (opcional)</Label>
        <Input
          id="web"
          name="web"
          type="url"
          autoComplete="url"
          placeholder="https://"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Ej.: sector, tipo de cliente que buscas, cuántas consultas recibes ahora y qué te gustaría mejorar."
          required
        />
      </div>

      <ContactFormSubmit />

      {state.error ? (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="text-sm text-muted-foreground" role="status">
          Mensaje enviado. Te responderé lo antes posible.
        </p>
      ) : null}
    </form>
  );
}
