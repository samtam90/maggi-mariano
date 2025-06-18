import React from "react";
import ImageParagraphSections from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: ImageParagraphSections,
  title: "ImageParagraphSections",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <ImageParagraphSections
      {...args}
      classNames={{ root: "bg-green-dark", item: { paragraph: "text-white" } }}
    />
  </AppThemeProvider>
);

const imgDim = window.innerWidth * 0.5;

export const Base = T.bind({});
Base.args = {
  headerImages: [
    {
      src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi-white.png",
      alt: "Maggi",
      dimensions: { width: 300, height: 110 },
    },
    {
      src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/eco.png",
      alt: "Maggi",
      dimensions: { width: 85, height: 105 },
    },
  ],
  items: [
    {
      paragraphs: [
        "Da oltre quarant'anni, la nostra azienda opera nel settore dei servizi ecologici, mettendo a disposizione delle industrie, dei privati e degli enti un valido supporto nella gestione dei rifiuti speciali e pericolosi.",
        "Grazie alla nostra vasta esperienza, siamo in grado di offrire servizi di alta qualità, che comprendono il ritiro, il trasporto e lo smaltimento o il recupero dei rifiuti, nonché lo svuotamento e lo spurgo di fosse biologiche, la stasatura delle condotte, le videoispezioni e la disidratazione dei fanghi di depurazione civili e industriali.",
        "Inoltre, offriamo anche il noleggio di bagni chimici per eventi e manifestazioni, la raccolta di ferro e metalli in genere, il trasporto dell’acqua e molti altri servizi, sempre nel rispetto dell’ambiente.",
        "Tutti i nostri servizi sono svolti con la massima attenzione alla sicurezza e alla protezione dell’ambiente, in linea con le normative vigenti e con la massima trasparenza nei confronti dei nostri clienti. Ci impegniamo a offrire un servizio completo e di alta qualità, sempre al passo con le nuove tecnologie e le esigenze del mercato.",
      ],
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
        alt: "Servizio 1",
        dimensions: { width: imgDim, height: imgDim },
      },
      imagePosition: "end",
    },
    {
      paragraphs: [
        "Grazie alla collaborazione con personale qualificato, Maggi Mariano Servizi Ecologici srl garantisce la massima qualità e sicurezza dei servizi erogati, ed è un partner ideale per tutte le aziende che sono alla ricerca di servizi innovativi, efficienti, puntuali e sicuri per la gestione dei rifiuti.",
      ],
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
        alt: "Servizio 1",
        dimensions: { width: imgDim, height: imgDim },
      },
      imagePosition: "start",
    },
  ],
  variant: "horizontal",
};
