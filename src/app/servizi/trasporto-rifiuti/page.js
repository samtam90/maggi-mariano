import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import province from "../../../../.data/province.json";

const imgDims = { width: 1024, height: 1024 };

export function getProps({ title, mobile }) {
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
              `L'azienda MAGGI MARIANO SERVIZI ECOLOGICI effettua il servizio di ${title} con una esperienza e professionalità che tutti i nostri clienti ci riconoscono da sempre.`,
              "Operiamo nel settore da anni e nel tempo ci siamo attrezzati con i migliori macchinare e le migliori tecnologie che ci permettono di garantire interventi tempestivi, poco invasivi e soprattutto a prezzi estremamente concorrenziali.",
              `Offriamo il servizio di TRASPORTO RIFIUTI per le aziende, gli uffici ma anche per i privati.`,
              "Se hai da smaltire quasiasi genere di rifiuto solido o liquido contattaci e ti offriremo la nostra consulenza, valuteremo insieme tutti gli aspetti dell’intevento richiesto e ti proporremo un preventivo che sarà sicuramente tra i più concorrenziali del mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Maggi2.jpg",
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
              "Spesso i rifiuti industriali possono contenere sostanze tossiche o nocive che vanno trasportate e smaltite in maniera adeguata ed in estrema sicurezza.",
              `La nostra azienda è specializzata nel ${title} ed è in grado di provvedere al trasporto e allo smaltimento di tutti i generi di scarti e rifiuti sia solidi che liquidi.`,
              "Siamo muniti di mezzi adeguati per ogni genere di intervento sia in ambito industriale che civile, possiamo raggiungere ed operare anche in ambienti difficili come centri storici, località montane o in situazioni di emergenza come quelle generate da alluvioni, terremoti e latri eventi naturali.",
            ],
          },
        ],
      },
      locations: {
        items: makeNavGridItems(
          province,
          appConfig.links.servizi["trasporto-rifiuti"]
        ),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutte le province italiane:
          </span>
        ),
      },
      contacts: {
        preTitle: "Per ogni tua problematica ed urgenza riguardante",
        title,
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
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/mezzi-29-scaled-1-1536x1022.jpg",
            alt: title,
          },
        ],
        formTitle:
          "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
        variant: "horizontal",
        imageDimensions: { width: 650, height: 850 },
      },
    },
  };
}

export const metadata = getMetadata({ title: "Trasporto rifiuti" });
export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export function Page({ searchParams, title }) {
  const mobile = searchParams?.viewport === "mobile";
  const props = getProps({ title, mobile });
  return (
    <ConditionalPage
      {...props}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
    />
  );
}

export function withBaseProps({ title }) {
  return memo(async ({ searchParams }) => (
    <Page searchParams={searchParams} title={title} />
  ));
}

export default withBaseProps({ title: "Trasporto rifiuti" });
