import React from "react";
import ContactForm from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: ContactForm,
  title: "ContactForm",
  argTypes: {
    onSubmit: { action: "onSubmit", table: { disable: true } },
    getSubmitLabel: { table: { disable: true } },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <div className="h-[100vh] bg-gray-100">
      <ContactForm {...args} classNames={{ root: "max-w-3xl mx-auto" }} />
    </div>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  title: "Title",
  labels: {
    name: "Nome",
    surname: "Cognome",
    email: "Email",
    title: "the title",
    content: "the content",
    privacy:
      "Inviando questo modulo dichiaro di aver letto l'informativa sulla privacy (Privacy Policy) del sito www.maggi-mariano.it e acconsento alla memorizzazione dei miei dati",
  },
  ids: {
    input: (field) => `form-field-${field}`,
  },
  getSubmitLabel: (status) => (status === "success" ? "Success" : "Submit"),
  validationPatterns: {
    text: /[a-zA-Z]+/,
  },
  invalidMessages: {
    name: "Nome non valido",
    title: "Oggetto del messaggio non valido.",
    content: "Contenuto del messaggio non valido.",
    privacy: "Devi accettare la privacy policy.",
  },
};
