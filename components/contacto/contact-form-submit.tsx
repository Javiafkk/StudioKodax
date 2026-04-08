"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export function ContactFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
      {pending ? "Enviando…" : "Enviar solicitud"}
    </Button>
  );
}
