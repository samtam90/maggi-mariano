import appConfig, { links } from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import { getContactStuff } from "../pulizia-fognature/page";
import { HighlightedText } from "../centrifugazione-o-disidratazione-fanghi/page";
import {
  getBaseLocationsData,
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
              <HighlightedText>
                L'azienda Maggi Mariano Servizi Ecologici effettua il servizio
                di {title} con una esperienza e professionalità che tutti i
                nostri clienti ci riconoscono da sempre.
              </HighlightedText>,
              <span>
                Operiamo nel settore del {title} da anni e nel tempo ci siamo
                attrezzati con
                <HighlightedText>
                  i migliori macchinari e le migliori tecnologie
                </HighlightedText>{" "}
                che ci permettono di garantire interventi di {title}
                tempestivi, poco invasivi e soprattutto{" "}
                <HighlightedText>
                  a prezzi estremamente concorrenziali
                </HighlightedText>
                .
              </span>,
              <span>
                Offriamo il servizio di {title} per le aziende, gli uffici ma
                anche per i privati.
              </span>,
              "Se hai da smaltire qualsiasi genere di rifiuto solido o liquido contattaci e ti offriremo la nostra consulenza, valuteremo insieme tutti gli aspetti dell’intervento richiesto e ti proporremo un preventivo che sarà sicuramente tra i più concorrenziali del mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/Maggi2.jpg",
                label: `${title} 1`,
                dimensions: imgDims,
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              "Quando una azienda si trova nella necessità di smaltire i rifiuti o i prodotti di scarto derivanti dalle varie tipologie di lavorazioni aziendali, è importante che si rivolga ad aziende specializzate che offrono questo servizio con professionalità e competenza.",
              "Spesso i rifiuti industriali possono contenere sostanze tossiche o nocive che vanno trasportate e smaltite in maniera adeguata e in estrema sicurezza.",
              `La nostra azienda è specializzata nel ${title} ed è in grado di provvedere al trasporto e allo smaltimento di tutti i generi di scarti e rifiuti sia solidi che liquidi.`,
              "Siamo muniti di mezzi adeguati per ogni genere di intervento sia in ambito industriale che civile, possiamo raggiungere e operare anche in ambienti difficili come centri storici, località montane o in situazioni di emergenza come quelle generate da alluvioni, terremoti e latri eventi naturali.",
            ],
          },
        ],
      },
      locations:
        locationsData ||
        getBaseLocationsData({
          links: appConfig.links.servizi["trasporto-rifiuti"],
          serviceName: "trasporto rifiuti",
        }),
      contacts: getContactStuff({ title }),
    },
  };
}

export const metadata = getMetadata({
  title: "Trasporto rifiuti",
  canonical: links.servizi["trasporto-rifiuti"].root,
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

export default withBaseProps({ title: "Trasporto rifiuti" });
