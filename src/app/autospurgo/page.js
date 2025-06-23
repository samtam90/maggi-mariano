import { withConditionalRendering } from "@/misc/functions";
import dynamic from "next/dynamic";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../app.config";

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
              <span className="text-gray-700 font-titleBold">
                Operiamo nel settore da anni e nel tempo ci siamo attrezzati con
                i migliori macchinare e le migliori tecnologie che ci permettono
                di garantire interventi tempestivi, poco invasivi e soprattutto
                a prezzi estremamente concorrenziali.
              </span>,
              <span>
                Garantiamo{" "}
                <span className="text-gray-700 font-titleBold">
                  risposte ideali per disostruire , svuotare e liberare
                </span>{" "}
                qualsiasi impianto, dai alle fognature e fosse biologiche.
              </span>,
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "E' possibile stabilire a priori e programmare le nostre ispezioni ed interventi per tutto l'anno evitando le urgenze e le problematiche che ne conseguono.",
            ],
            mediaElements: [
              {
                label: "Image1",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/fognature-1.jpg",
                dimensions: { width: 800, height: 550 },
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
          },
          {
            paragraphs: [
              "Ci siamo dotati da tempo di un parco mezzi estremamente vario e tecnologicamente avanzato.",
              `Siamo in grado di effettuare il ${title} anche in ambienti difficilmente raggiungibili con i normali mezzi come abitazioni in centri storici o in località montane difficili da raggiungere.`,
              "Effettuiamo anche la stasatura e disotturazione di tubature, fosse biologiche, scarichi fognari e la pulizia di tombini.",
              "Trasportiamo acqua potabile per il riempimento di cisterne e piscine per privati, alberghi, ristoranti, comunità e agriturismi.",
            ],
            mediaElements: [
              {
                label: "Image2",
                srcset:
                  "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Maggi2.jpg",
                dimensions: { width: 400, height: 300 },
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: {
              mediaContainer: "basis-25",
              paragraphsContainer: "flex-grow",
              paragraphs: "mb-4",
            },
          },
        ],
      },
      locations: {
        items: [
          {
            label: "Anghiari",
            href: appConfig.links.autospurgo.anghiari,
          },
          {
            label: "Arezzo",
            href: appConfig.links.autospurgo.arezzo,
          },
          {
            label: "Badia Prataglia",
            href: appConfig.links.autospurgo["badia-prataglia"],
          },
          {
            label: "Badia Tedalda",
            href: appConfig.links.autospurgo["badia-tedalda"],
          },
          {
            label: "Bibbiena",
            href: appConfig.links.autospurgo.bibbiena,
          },
          {
            label: "Bucine",
            href: appConfig.links.autospurgo.bucine,
          },
          {
            label: "Camucia",
            href: appConfig.links.autospurgo.camucia,
          },
          {
            label: "Capolona",
            href: appConfig.links.autospurgo.capolona,
          },
          {
            label: "Caprese Michelangelo",
            href: appConfig.links.autospurgo["caprese-michelangelo"],
          },
          {
            label: "Castel Focognano",
            href: appConfig.links.autospurgo["castel-focognano"],
          },
          {
            label: "Castel San Niccolò",
            href: appConfig.links.autospurgo["castel-san-niccolo"],
          },
          {
            label: "Castelfranco Piandiscò",
            href: appConfig.links.autospurgo["castelfranco-piandisco"],
          },
          {
            label: "Castiglion Fibocchi",
            href: appConfig.links.autospurgo["castiglion-fibocchi"],
          },
          {
            label: "Castiglion Fiorentino",
            href: appConfig.links.autospurgo["castiglion-fiorentino"],
          },
          {
            label: "Cavriglia",
            href: appConfig.links.autospurgo.cavriglia,
          },
          {
            label: "Cesa in Valdichiana",
            href: appConfig.links.autospurgo["cesa-in-valdichiana"],
          },
          {
            label: "Chitignano",
            href: appConfig.links.autospurgo.chitignano,
          },
          {
            label: "Chiusi della Verna",
            href: appConfig.links.autospurgo["chiusi-della-verna"],
          },
          {
            label: "Civitella in Valdichiana",
            href: appConfig.links.autospurgo["civitella-in-valdichiana"],
          },
          {
            label: "Cortona",
            href: appConfig.links.autospurgo.cortona,
          },
          {
            label: "Foiano della Chiana",
            href: appConfig.links.autospurgo["foiano-della-chiana"],
          },
          {
            label: "Laterina",
            href: appConfig.links.autospurgo.laterina,
          },
          {
            label: "Loro Ciuffenna",
            href: appConfig.links.autospurgo["loro-ciuffenna"],
          },
          {
            label: "Lucignano",
            href: appConfig.links.autospurgo.lucignano,
          },
          {
            label: "Marciano della Chiana",
            href: appConfig.links.autospurgo["marciano-della-chiana"],
          },
          {
            label: "Monte San Savino",
            href: appConfig.links.autospurgo["monte-san-savino"],
          },
          {
            label: "Montemignaio",
            href: appConfig.links.autospurgo.montemignaio,
          },
          {
            label: "Monterchi",
            href: appConfig.links.autospurgo.monterchi,
          },
          {
            label: "Montevarchi",
            href: appConfig.links.autospurgo.montevarchi,
          },
          {
            label: "Ortignano Raggiolo",
            href: appConfig.links.autospurgo["ortignano-raggiolo"],
          },
          {
            label: "Pergine Valdarno",
            href: appConfig.links.autospurgo["pergine-valdarno"],
          },
          {
            label: "Pieve al Toppo",
            href: appConfig.links.autospurgo["pieve-al-toppo"],
          },
          {
            label: "Pieve Santo Stefano",
            href: appConfig.links.autospurgo["pieve-santo-stefano"],
          },
          {
            label: "Poppi",
            href: appConfig.links.autospurgo.poppi,
          },
          {
            label: "Pratovecchio Stia",
            href: appConfig.links.autospurgo["pratovecchio-stia"],
          },
          {
            label: "Rassina",
            href: appConfig.links.autospurgo.rassina,
          },
          {
            label: "Rigutino",
            href: appConfig.links.autospurgo.rigutino,
          },
          {
            label: "San Giovanni Valdarno",
            href: appConfig.links.autospurgo["san-giovanni-valdarno"],
          },
          {
            label: "Sansepolcro",
            href: appConfig.links.autospurgo.sansepolcro,
          },
          {
            label: "Sestino",
            href: appConfig.links.autospurgo.sestino,
          },
          {
            label: "Soci",
            href: appConfig.links.autospurgo.soci,
          },
          {
            label: "Subbiano",
            href: appConfig.links.autospurgo.subbiano,
          },
          {
            label: "Talla",
            href: appConfig.links.autospurgo.talla,
          },
          {
            label: "Terranuova Bracciolini",
            href: appConfig.links.autospurgo["terranuova-bracciolini"],
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

export const ConditionalPage = withConditionalRendering({
  Mobile: dynamic(() => import("@/templates/MainContent/alt/mobile")),
  Desktop: dynamic(() => import("@/templates/MainContent/alt/desktop")),
});

export async function Page({ searchParams, title }) {
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

export default withBaseProps({ title: "Autospurgo" });
