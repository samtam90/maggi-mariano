import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import province from "../../../../.data/province.json";
import { getContactStuff } from "../pulizia-fognature/page";

const imgDims = { width: 1024, height: 1024 };

export function getProps({ title, mobile, locationsData }) {
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
              `Se stai cercando un'azienda specializzata nello ${title} allora la MAGGI MARIANO SERVIZI ECOLOGICI è la ditta che fa per te. Contattaci subito e ti chiariremo ogni dubbio.`,
              `Lo ${title} non è in effetti un argomento che siamo soliti trattare nella vita di tutti i giorni, anzi! Preferiremmo certamente non dovercene occupare (chi vuole interessarsi di liquami!). Quando però è necessario farlo, è bene avere le idee chiare!`,
              "Spurgare una fognatura, una fossa biologica o un pozzo nero è un lavoro particolare e delicato, per questo è necessario affidarsi a un'azienda seria e certificata come la Maggi Mariano Servizi Ecologici!",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `Maggi Mariano Servizi Ecologici SRL è l'azienda leader per ${title}, spurgo fosse biologiche e fognature.`,
              "Garantiamo risposte ideali per disostruire, svuotare e liberare qualsiasi impianto, dai pozzi neri alle fognature e fosse biologiche.",
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "È possibile stabilire a priori e programmare le nostre ispezioni e interventi per tutto l'anno evitando le urgenze e le problematiche che ne conseguono.",
              "Siamo in grado di fornire il servizio di spurgo fosse biologiche a un prezzo tra i più vantaggiosi sul mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                dimensions: imgDims,
                src: "https://www.maggi-mariano.it/immagini/misc/botti-12-1024x682.jpg",
                label: `${title} 1`,
              },
            ],
            classNames: { root: "mb-8" },
            mediaPosition: mobile ? "bottom" : "right",
          },
          {
            paragraphs: [
              "Ci siamo dotati da tempo di un parco mezzi estremamente vario e tecnologicamente avanzato.",
              `Siamo in grado di effettuare lo ${title} anche in ambienti difficilmente raggiungibili con i normali mezzi come abitazioni in centri storici o in località montane difficili da raggiungere.`,
              `Tutti i nostri operatori sono preparati e qualificati per effettuare lo ${title} in maniera professionale senza arrecare nessun disagio alla nostra clientela.`,
            ],
            mediaPosition: mobile ? "bottom" : "left",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/mezzi-29-1024x682.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "lg:grid-cols-3" },
          },
        ],
      },
      locations: locationsData || {
        items: makeNavGridItems(
          province,
          appConfig.links.servizi["spurgo-pozzi-neri"]
        ),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutte le province italiane:
          </span>
        ),
      },
      contacts: getContactStuff({ title }),
    },
  };
}

export const metadata = getMetadata({ title: "Spurgo pozzi neri" });
export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export function Page({ searchParams, title, locationsData }) {
  const mobile = searchParams?.viewport === "mobile";
  const props = getProps({ title, mobile, locationsData });
  return (
    <ConditionalPage
      {...props}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
    />
  );
}

export function withBaseProps({ title, locationsData }) {
  return memo(async ({ searchParams }) => (
    <Page
      searchParams={searchParams}
      title={title}
      locationsData={locationsData}
    />
  ));
}

export default withBaseProps({ title: "Spurgo pozzi neri" });
