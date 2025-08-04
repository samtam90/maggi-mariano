import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig, { links } from "../../../app.config";
import Link from "next/link";
import province from "../../../.data/province.json";
import { HighlightedText } from "../servizi/centrifugazione-o-disidratazione-fanghi/page";
import { getContactStuff } from "../servizi/pulizia-fognature/page";

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
              <span className="text-gray-600 font-titleBold">
                Operiamo nel settore da anni e nel tempo ci siamo attrezzati con
                i migliori macchinari e le migliori tecnologie per il servizio
                di {title}. Garantiamo interventi di autospurgo tempestivi, poco
                invasivi e soprattutto a prezzi estremamente concorrenziali.
              </span>,
              <span>
                Garantiamo{" "}
                <span className="text-gray-600 font-titleBold">
                  risposte ideali per disostruire, svuotare e liberare
                </span>{" "}
                qualsiasi impianto, dai pozzi neri alle{" "}
                <Link
                  href={links.servizi["pulizia-fognature"].root}
                  className="font-titleBold underline text-green-dark"
                >
                  fognature
                </Link>{" "}
                e{" "}
                <Link
                  href={links.servizi["spurgo-fosse-biologiche"].root}
                  className="font-titleBold underline text-green-dark"
                >
                  fosse biologiche
                </Link>
                .
              </span>,
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              `È possibile stabilire a priori e programmare le nostre ispezioni e interventi di ${title} per tutto l'anno evitando le urgenze e le problematiche che ne conseguono.`,
            ],
            mediaElements: [
              {
                label: `${title} 1`,
                src: "https://www.maggi-mariano.it/immagini/misc/fognature-1.jpg",
                dimensions: { width: 800, height: 550 },
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
          },
          {
            paragraphs: [
              <span>
                Ci siamo dotati da tempo di un{" "}
                <HighlightedText>
                  parco mezzi estremamente vario e tecnologicamente avanzato
                </HighlightedText>
                .
              </span>,
              <span>
                Siamo in grado di{" "}
                <HighlightedText>
                  effettuare {title} anche in ambienti difficilmente
                  raggiungibili con i normali mezzi
                </HighlightedText>{" "}
                come abitazioni in centri storici o in località montane
                difficili da raggiungere.
              </span>,
              <span>
                Effettuiamo anche la stasatura e disotturazione di tubature,
                <Link
                  href={links.servizi["spurgo-fosse-biologiche"].root}
                  className="font-titleBold underline text-green-dark ml-1"
                >
                  fosse biologiche
                </Link>
                ,{" "}
                <Link
                  href={links.servizi["pulizia-fognature"]}
                  className="font-titleBold underline text-green-dark ml-1"
                >
                  scarichi fognari
                </Link>{" "}
                e la pulizia di tombini.
              </span>,
              <span>
                <Link
                  href={links.servizi["trasporto-acqua"].root}
                  className="font-titleBold underline text-green-dark"
                >
                  Trasportiamo acqua potabile
                </Link>{" "}
                per il riempimento di cisterne e piscine per privati, alberghi,
                ristoranti, comunità e agriturismi.
              </span>,
            ],
            mediaElements: [
              {
                label: `${title} 2`,
                srcset: "https://www.maggi-mariano.it/immagini/misc/Maggi2.jpg",
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
      locations: locationsData || {
        items: makeNavGridItems(province, appConfig.links.autospurgo),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo
            il servizio di autospurgo in tutte le province italiane:
          </span>
        ),
      },
      contacts: getContactStuff({ title }),
    },
  };
}

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export async function Page({
  searchParams,
  title,
  locationsData,
  locationNames,
}) {
  const mobile = searchParams?.viewport === "mobile";
  const props = getProps({ title, mobile, locationsData });
  return (
    <ConditionalPage
      {...props}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
      locationNames={locationNames}
    />
  );
}

export function withBaseProps({ title, locationsData, locationNames }) {
  return memo(async ({ searchParams }) => (
    <Page
      searchParams={searchParams}
      title={title}
      locationsData={locationsData}
      locationNames={locationNames}
    />
  ));
}

export default withBaseProps({ title: "Autospurgo" });
