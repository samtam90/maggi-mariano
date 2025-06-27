import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig, { links } from "../../../app.config";
import Link from "next/link";
import province from "../../../.data/province.json";

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
              <span className="text-gray-600 font-titleBold">
                Operiamo nel settore da anni e nel tempo ci siamo attrezzati con
                i migliori macchinare e le migliori tecnologie che ci permettono
                di garantire interventi tempestivi, poco invasivi e soprattutto
                a prezzi estremamente concorrenziali.
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
        items: makeNavGridItems(province, appConfig.links.autospurgo),
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
        content: (
          <span className="leading-normal">
            La nostra azienda è dotata di{" "}
            <Link
              href={links.servizi["videoispezioni-telecamera-robot"]}
              className="font-titleBold underline text-green-dark"
            >
              VIDEOCAMERA ROBOTIZZATA
            </Link>{" "}
            per ispezionare le fognature, scarichi e fosse biologiche
            difficilmente raggiungibili con altri mezzi, permettendoci di
            risolvere ogni problematica inerente lo Autospurgo Anghiari dei
            nostri clienti in tempi brevi.
          </span>
        ),
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
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
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
