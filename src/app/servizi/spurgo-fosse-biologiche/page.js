import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";

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
              `Se stai cercando un'azienda specializzata nello ${title} allora la MAGGI MARIANO SERVIZI ECOLOGICI è la ditta che fa per te. Contattaci subito e ti chiariremo ogni dubbio.`,
              `Lo ${title} non è in effetti un argomento che siamo soliti trattare nella vita di tutti i giorni, anzi! Preferiremmo certamente non dovercene occupare (chi vuole interessarsi di liquami!). Quando però è necessario farlo, è bene avere le idee chiare!`,
              "Spurgare una fognatura, una fossa biologica o un pozzo nero è un lavoro particolare e delicato, per questo è necessario affidarsi ad un’azienda seria e certificata come la Maggi Mariano Servizi Ecologici!",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `Maggi Mariano Servizi Ecologici srl è l’azienda leader per ${title}, spurgo pozzi neri e fognature.`,
              "Garantiamo risposte ideali per disostruire, svuotare e liberare qualsiasi impianto, dai pozzi neri alle fognature e fosse biologiche.",
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "E’ possibile stabilire a priori e programmare le nostre ispezioni ed interventi per tutto l’anno evitando le urgenze e le problematiche che ne conseguono.",
              "Siamo in grado di fornire il servizio di spurgo fosse biologiche ad un prezzo tra i più ventaggiosi sul mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                dimensions: imgDims,
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/botti-12-1024x682.jpg",
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
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/mezzi-29-1024x682.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "lg:grid-cols-3" },
          },
        ],
      },
      locations: {
        items: [
          {
            label: "Anghiari",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].anghiari,
          },
          {
            label: "Arezzo",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].arezzo,
          },
          {
            label: "Badia Tedalda",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "badia-tedalda"
            ],
          },
          {
            label: "Bibbiena",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].bibbiena,
          },
          {
            label: "Bucine",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].bucine,
          },
          {
            label: "Capolona",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].capolona,
          },
          {
            label: "Caprese Michelangelo",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "caprese-michelangelo"
            ],
          },
          {
            label: "Castel Focognano",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "castel-focognano"
            ],
          },
          {
            label: "Castel San Niccolò",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "castel-san-niccolo"
            ],
          },
          {
            label: "Castelfranco Piandiscò",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "castelfranco-piandisco"
            ],
          },
          {
            label: "Castiglion Fibocchi",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "castiglion-fibocchi"
            ],
          },
          {
            label: "Castiglion Fiorentino",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "castiglion-fiorentino"
            ],
          },
          {
            label: "Cavriglia",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].cavriglia,
          },
          {
            label: "Chitignano",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].chitignano,
          },
          {
            label: "Chiusi della Verna",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "chiusi-della-verna"
            ],
          },
          {
            label: "Civitella in Valdichiana",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "civitella-in-valdichiana"
            ],
          },
          {
            label: "Cortona",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].cortona,
          },
          {
            label: "Foiano della Chiana",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "foiano-della-chiana"
            ],
          },
          {
            label: "Laterina",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].laterina,
          },
          {
            label: "Loro Ciuffenna",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "loro-ciuffenna"
            ],
          },
          {
            label: "Lucignano",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].lucignano,
          },
          {
            label: "Marciano della Chiana",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "marciano-della-chiana"
            ],
          },
          {
            label: "Monte San Savino",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "monte-san-savino"
            ],
          },
          {
            label: "Montemignaio",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"]
              .montemignaio,
          },
          {
            label: "Monterchi",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].monterchi,
          },
          {
            label: "Montevarchi",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"]
              .montevarchi,
          },
          {
            label: "Ortignano Raggiolo",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "ortignano-raggiolo"
            ],
          },
          {
            label: "Pergine Valdarno",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "pergine-valdarno"
            ],
          },
          {
            label: "Pieve al Toppo",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "pieve-al-toppo"
            ],
          },
          {
            label: "Pieve Santo Stefano",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "pieve-santo-stefano"
            ],
          },
          {
            label: "Poppi",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].poppi,
          },
          {
            label: "Pratovecchio Stia",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "pratovecchio-stia"
            ],
          },
          {
            label: "Rassina",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].rassina,
          },
          {
            label: "Rigutino",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].rigutino,
          },
          {
            label: "San Giovanni Valdarno",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "san-giovanni-valdarno"
            ],
          },
          {
            label: "Sansepolcro",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"]
              .sansepolcro,
          },
          {
            label: "Sestino",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].sestino,
          },
          {
            label: "Soci",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].soci,
          },
          {
            label: "Subbiano",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].subbiano,
          },
          {
            label: "Talla",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"].talla,
          },
          {
            label: "Terranuova Bracciolini",
            href: appConfig.links.servizi["spurgo-fosse-biologiche"][
              "terranuova-bracciolini"
            ],
          },
        ],
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutti i luoghi e comuni della provincia di arezzo:
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
      },
    },
  };
}

export const metadata = getMetadata({ title: "Spurgo fosse biologiche" });
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

export default withBaseProps({ title: "Spurgo fosse biologiche" });
