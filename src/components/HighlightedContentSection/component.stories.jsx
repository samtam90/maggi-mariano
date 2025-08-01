import React from "react";
import HighlightedContentSection from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: HighlightedContentSection,
  title: "HighlightedContentSection",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <HighlightedContentSection {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  variant: "horizontal",
  titleUnderlineActive: false,
  paragraphs: [
    "Recentemente abbiamo inserito nel nostro parco macchine un FRANTOIO MOBILE DI INERTI, questo strumento permette il trattamento dei rifiuti di produzione di materiali compositi a base di cemento, mattoni, mattonelle, ceramiche, rifiuti generati dalle attività di demolizione, miscele bituminose e molti altri.",
    "La macchina è dotata di un'ampia tramoggia di carico, di un frantoio a mascelle e di un nastro trasportatore che conduce il materiale nel percorso di trattamento fino all'ottenimento di frazioni inerti a granulometria idonea e selezionata.",
    "L'impianto mobile è inoltre dotato di un nastro magnetico deferrizzatore per l'estrazione e lo scarico laterale delle frazioni metalliche presenti nei rifiuti oggetto di recupero.",
    "Il vaglio è alimentato da motore diesel. L'operatore tramite pala gommata provvede all'alimentazione del vaglio scaricando i rifiuti da vagliare nella tramoggia di alimentazione della macchina. Il vaglio provvede quindi a selezionare i rifiuti in n. 3 frazioni granulometriche desiderate. Suddette frazioni vengono depositate in cumuli distinti lateralmente (ovvero lato destro e sinistro) e posteriormente al vaglio.",
    "La capacità di produzione massima dell'impianto mobile è pari a 70 t/h, considerando 8 ore lavorative al giorno e 220 giorni lavorativi all'anno si ha che l'impianto mobile potrebbe teoricamente al massimo recuperare:",
  ],
  image: {
    src: "https://www.maggi-mariano.it/immagini/misc/frantumatore-mobile.jpg",
    alt: "Image",
    dimensions: { width: 700, height: 300 },
  },
  link: {
    href: "https://www.maggi-mariano.it/frantoio-mobile-inerti/",
    label: "Per maggiori informazioni clicca qui",
  },
  title: { left: "New: ", right: "FRANTOIO MOBILE DI INERTI" },
};
