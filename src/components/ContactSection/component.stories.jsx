import React from "react";
import ContactSection from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: ContactSection,
  title: "ContactSection",
  argTypes: {
    onFormSubmit: { action: "onFormSubmit", table: { disable: true } },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <ContactSection
      {...args}
      ids={{ form: { input: (inputId) => `form-input-${inputId}` } }}
    />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  preTitle: "Per ogni tua problematica ed urgenza riguardante",
  title: "Autospurgo Anghiari",
  phoneNumbers: [
    {
      label: "Tel.: 0575/520447",
      href: "tel:0575520447",
    },
    {
      label: "Cell.: 334 3889878",
      href: "tel:3343889878",
    },
  ],
  content:
    "La nostra azienda è dotata di VIDEOCAMERA ROBOTIZZATA per ispezionare le fognature, scarichi e fosse biologiche difficilmente raggiungibili con altri mezzi, permettendoci di risolvere ogni problematica inerente lo Autospurgo Anghiari dei nostri clienti in tempi brevi.",
  images: [
    {
      src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-5-1-1.jpg",
      alt: "Image1",
    },
    {
      src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-14-1-1.jpg",
      alt: "Image2",
    },
  ],
  formTitle:
    "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
  variant: "horizontal",
  imageDimensions: { width: 650, height: 850 },
};
