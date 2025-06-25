"use server";

import nodemailer from "nodemailer";
import { ContactFormData } from "../../components/ContactForm";
import appConfig from "../../../app.config";

/**
 * @returns
 * @param {ContactFormData} data
 */
export async function onContactFormSubmit({
  name,
  surname,
  email,
  title,
  content,
}) {
  const transport = nodemailer.createTransport(appConfig.server.mail);

  const out = await transport.sendMail({
    from: appConfig.server.mail.senderMail,
    to: appConfig.server.mail.adminMails.join(", "),
    subject: "Nuova richiesta dal sito",
    text: `E' stata ricevuta una nuova richiesta da "${name} ${surname} (${email})" con i seguenti dati:\n\nOggetto: ${title}\nContenuto: ${content}`,
  });

  console.log(out);
}
