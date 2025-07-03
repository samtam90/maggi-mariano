"use client";

import React, { memo } from "react";
import Link from "next/link";
import { links } from "../../../app.config";
import { components, ContactFormField } from "@italwebcom/tailwind-components";

const { ContactForm } = components;

/**
 * @type {Record<ContactFormField, string>}
 */
const DEFAULT_LABELS = {
  name: "Nome",
  surname: "Cognome",
  email: "Email",
  title: "Oggetto",
  content: "Messaggio",
  privacy: (
    <p className="inline leading-tight">
      Inviando questo modulo dichiaro di aver letto{" "}
      <Link
        className="underline text-blue-500"
        href={links.privacy["privacy-policy"]}
        target="_blank"
      >
        l'informativa sulla privacy (Privacy Policy)
      </Link>{" "}
      del sito www.maggi-mariano.it e acconsento alla memorizzazione dei miei
      dati, secondo quanto stabilito dal regolamento europeo per la protezione
      dei dati personali n. 679/2016 (GDPR).
    </p>
  ),
};

function WrappedContactForm(props) {
  return <ContactForm labels={DEFAULT_LABELS} {...props} />;
}

export default memo(WrappedContactForm);
