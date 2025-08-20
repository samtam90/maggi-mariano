import appConfig, { links } from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import { HighlightedText } from "../centrifugazione-o-disidratazione-fanghi/page";
import province from "../../../../.data/province-alt.json";
import {
  getBaseLocationsData,
  getContactStuff,
  withBaseProps as withExternalBaseProps,
} from "@/misc/pages";

const imgDims = { width: 1024, height: 1024 };

export function getBaseProps({ title, mobile, locationsData }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: title,
          right: "Maggi Mariano Servizi Ecologici",
        },
        sections: [
          {
            paragraphs: [
              `Ci occupiamo di ${title}, anche con interventi programmati e fissati nel tempo.`,
              "Effettuare una periodica pulizia delle fognature è importante per garantire un buon funzionamento di tutto l'apparato fognario e di scarico di abitazioni, condomini, aziende e uffici.",
              <HighlightedText>
                Purtroppo questo è un argomento che troppo spesso non viene
                preso nella giusta considerazione, nella maggioranza dei casi ci
                ricordiamo di effettuare la Pulizia fognature solo quando si
                presentano problemi, a volte anche gravi, alla struttura
                fognaria.
              </HighlightedText>,
              "Anche per la pulizia fognature condominiali va prestata la stessa attenzione, anzi proprio in questi casi è fondamentale programmare anticipatamente gli interventi da effettuare durante il corso di tutto l'anno.",
              "Tutte le operazioni sulle fognature o fosse biologiche condominiali sono sempre più complesse e impegnative rispetto a quelle che effettuate in una normale abitazione a causa di questo una manutenzione periodica e programmata, una accurata pulizia fognature condominiali garantiscono il buon funzionamento degli scarichi ed evitano spiacevoli problematiche a tutti i condomini.",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `Maggi Mariano Servizi Ecologici SRL è l'azienda leader per ${title}, spurgo fosse biologiche e spurgo pozzi neri`,
              "Garantiamo risposte ideali per disostruire, svuotare e liberare qualsiasi impianto, pozzi neri, fognature e fosse biologiche.",
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "È possibile stabilire a priori e programmare le nostre ispezioni e interventi per tutto l'anno evitando le urgenze e le problematiche che ne conseguono.",
              "Siamo in grado di fornire il servizio di spurgo pozzi neri e di pulizia delle fognature a un prezzo tra i più vantaggiosi sul mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                dimensions: imgDims,
                src: "https://www.maggi-mariano.it/immagini/misc/fognature.jpg",
                label: `${title} 1`,
              },
            ],
            classNames: { root: "mb-8" },
            mediaPosition: mobile ? "bottom" : "right",
          },
          {
            paragraphs: [
              "Ci siamo dotati da tempo di un parco mezzi estremamente vario e tecnologicamente avanzato.",
              `Con i nostri mezzi possiamo effettuare la ${title} anche in ambienti difficilmente raggiungibili con i normali mezzi come abitazioni in centri storici o in località montane difficili da raggiungere.`,
              `Tutti i nostri operatori sono preparati e qualificati per effettuare la ${title} in maniera professionale senza arrecare nessun disagio alla nostra clientela.`,
            ],
            mediaPosition: mobile ? "bottom" : "left",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/fognature-2.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "lg:grid-cols-3" },
          },
        ],
      },
      locations:
        locationsData ||
        getBaseLocationsData({
          links: appConfig.links.servizi["pulizia-fognature"],
          serviceName: "pulizia fognature",
          province,
        }),
      contacts: getContactStuff({ title }),
    },
  };
}

export const metadata = getMetadata({
  title: "Pulizia fognature",
  canonical: links.servizi["pulizia-fognature"].root,
});

export function withBaseProps({ title, locationsData, locationNames }) {
  return withExternalBaseProps({
    title,
    locationNames,
    locationsData,
    getBaseProps,
    Components: {
      Mobile: import("@/templates/MainContent/alt/mobile"),
      Desktop: import("@/templates/MainContent/alt/desktop"),
    },
  });
}

export { getContactStuff, getMetadata };
export default withBaseProps({ title: "Pulizia fognature" });
