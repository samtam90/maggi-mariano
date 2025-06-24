import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";

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
        items: [
          {
            label: "Anghiari",
            href: appConfig.links.servizi["trasporto-rifiuti"].anghiari,
          },
          {
            label: "Arezzo",
            href: appConfig.links.servizi["trasporto-rifiuti"].arezzo,
          },
          {
            label: "Badia Tedalda",
            href: appConfig.links.servizi["trasporto-rifiuti"]["badia-tedalda"],
          },
          {
            label: "Bibbiena",
            href: appConfig.links.servizi["trasporto-rifiuti"].bibbiena,
          },
          {
            label: "Bucine",
            href: appConfig.links.servizi["trasporto-rifiuti"].bucine,
          },
          {
            label: "Capolona",
            href: appConfig.links.servizi["trasporto-rifiuti"].capolona,
          },
          {
            label: "Caprese Michelangelo",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "caprese-michelangelo"
            ],
          },
          {
            label: "Castel Focognano",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "castel-focognano"
            ],
          },
          {
            label: "Castel San Niccolò",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "castel-san-niccolo"
            ],
          },
          {
            label: "Castelfranco Piandiscò",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "castelfranco-piandisco"
            ],
          },
          {
            label: "Castiglion Fibocchi",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "castiglion-fibocchi"
            ],
          },
          {
            label: "Castiglion Fiorentino",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "castiglion-fiorentino"
            ],
          },
          {
            label: "Cavriglia",
            href: appConfig.links.servizi["trasporto-rifiuti"].cavriglia,
          },
          {
            label: "Chitignano",
            href: appConfig.links.servizi["trasporto-rifiuti"].chitignano,
          },
          {
            label: "Chiusi della Verna",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "chiusi-della-verna"
            ],
          },
          {
            label: "Civitella in Valdichiana",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "civitella-in-valdichiana"
            ],
          },
          {
            label: "Cortona",
            href: appConfig.links.servizi["trasporto-rifiuti"].cortona,
          },
          {
            label: "Foiano della Chiana",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "foiano-della-chiana"
            ],
          },
          {
            label: "Laterina",
            href: appConfig.links.servizi["trasporto-rifiuti"].laterina,
          },
          {
            label: "Loro Ciuffenna",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "loro-ciuffenna"
            ],
          },
          {
            label: "Lucignano",
            href: appConfig.links.servizi["trasporto-rifiuti"].lucignano,
          },
          {
            label: "Marciano della Chiana",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "marciano-della-chiana"
            ],
          },
          {
            label: "Monte San Savino",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "monte-san-savino"
            ],
          },
          {
            label: "Montemignaio",
            href: appConfig.links.servizi["trasporto-rifiuti"].montemignaio,
          },
          {
            label: "Monterchi",
            href: appConfig.links.servizi["trasporto-rifiuti"].monterchi,
          },
          {
            label: "Montevarchi",
            href: appConfig.links.servizi["trasporto-rifiuti"].montevarchi,
          },
          {
            label: "Ortignano Raggiolo",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "ortignano-raggiolo"
            ],
          },
          {
            label: "Pergine Valdarno",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "pergine-valdarno"
            ],
          },
          {
            label: "Pieve al Toppo",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "pieve-al-toppo"
            ],
          },
          {
            label: "Pieve Santo Stefano",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "pieve-santo-stefano"
            ],
          },
          {
            label: "Poppi",
            href: appConfig.links.servizi["trasporto-rifiuti"].poppi,
          },
          {
            label: "Pratovecchio Stia",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "pratovecchio-stia"
            ],
          },
          {
            label: "Rassina",
            href: appConfig.links.servizi["trasporto-rifiuti"].rassina,
          },
          {
            label: "Rigutino",
            href: appConfig.links.servizi["trasporto-rifiuti"].rigutino,
          },
          {
            label: "San Giovanni Valdarno",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "san-giovanni-valdarno"
            ],
          },
          {
            label: "Sansepolcro",
            href: appConfig.links.servizi["trasporto-rifiuti"].sansepolcro,
          },
          {
            label: "Sestino",
            href: appConfig.links.servizi["trasporto-rifiuti"].sestino,
          },
          {
            label: "Soci",
            href: appConfig.links.servizi["trasporto-rifiuti"].soci,
          },
          {
            label: "Subbiano",
            href: appConfig.links.servizi["trasporto-rifiuti"].subbiano,
          },
          {
            label: "Talla",
            href: appConfig.links.servizi["trasporto-rifiuti"].talla,
          },
          {
            label: "Terranuova Bracciolini",
            href: appConfig.links.servizi["trasporto-rifiuti"][
              "terranuova-bracciolini"
            ],
          },
        ],
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutti i comuni della provincia di arezzo
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
