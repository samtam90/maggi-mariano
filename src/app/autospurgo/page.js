import { links } from "../../../app.config";
import Link from "next/link";
import { HighlightedText } from "../servizi/centrifugazione-o-disidratazione-fanghi/page";
import { getContactStuff } from "../servizi/pulizia-fognature/page";
import {
  getBaseLocationsData,
  withBaseProps as withExternalBaseProps,
} from "../../misc/pages";
import AdditionalServiceLocations from "@/components/AdditionalServiceLocations";

export function getBaseProps({
  title,
  mobile,
  locationsData,
  additionalServiceLocations,
  isBot,
}) {
  const sections = [
    {
      paragraphs: [
        <span className="text-gray-600 font-titleBold">
          Operiamo nel settore da anni e nel tempo ci siamo attrezzati con i
          migliori macchinari e le migliori tecnologie per il servizio di{" "}
          {title}. Garantiamo interventi di autospurgo tempestivi, poco invasivi
          e soprattutto a prezzi estremamente concorrenziali.
        </span>,
        <span>
          Garantiamo{" "}
          <span className="text-gray-600 font-titleBold">
            risposte ideali per disostruire, svuotare e liberare
          </span>{" "}
          qualsiasi impianto, dai{" "}
          <Link
            href={links.servizi["spurgo-pozzi-neri"].root}
            className="font-titleBold underline text-green-dark"
          >
            pozzi neri
          </Link>{" "}
          alle{" "}
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
            effettuare {title} anche in ambienti difficilmente raggiungibili con
            i normali mezzi
          </HighlightedText>{" "}
          come abitazioni in centri storici o in località montane difficili da
          raggiungere.
        </span>,
        <span>
          Effettuiamo anche la stasatura e disotturazione di tubature,
          <Link
            href={links.servizi["spurgo-fosse-biologiche"].root}
            className="font-titleBold underline text-green-dark ml-1"
          >
            spurgo di fosse biologiche
          </Link>
          ,
          <Link
            href={links.servizi["pulizia-fognature"].root}
            className="font-titleBold underline text-green-dark ml-1"
          >
            pulizia di scarichi fognari
          </Link>{" "}
          e di tombini.
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
  ];
  if (additionalServiceLocations) {
    sections.push({
      content: (
        <AdditionalServiceLocations
          locations={additionalServiceLocations}
          serviceName="Autospurgo"
          maxInitialShownLocations={!isBot ? 24 : null}
        />
      ),
    });
  }
  return {
    sections: {
      mainContent: {
        title: {
          left: title,
          right: "Maggi Mariano Servizi Ecologici",
        },
        sections,
      },
      locations:
        locationsData ||
        getBaseLocationsData({
          links: links.autospurgo,
          serviceName: "autospurgo",
        }),
      contacts: getContactStuff({ title }),
    },
  };
}

export function withBaseProps({
  title,
  locationsData,
  locationNames,
  additionalServiceLocations,
}) {
  return withExternalBaseProps({
    title,
    locationNames,
    locationsData,
    additionalServiceLocations,
    getBaseProps,
    Components: {
      Mobile: import("@/templates/MainContent/alt/mobile"),
      Desktop: import("@/templates/MainContent/alt/desktop"),
    },
  });
}

export const metadata = {
  title: "Autospurgo - Maggi Mariano servizi ecologici",
  alternates: {
    canonical: links.autospurgo.root,
  },
};

export default withBaseProps({ title: "Autospurgo" });
