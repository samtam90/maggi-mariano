import { memo } from "react";
import appConfig, { links } from "../../../app.config";
import { makeNavGridItems, withConditionalRendering } from "../functions";
import { onContactFormSubmit } from "../server";
import province from "../../../.data/province.json";
import Link from "next/link";

export function getProvinceLocationsData({ comuni, links, name }) {
  if (comuni?.length) {
    return {
      items: makeNavGridItems(comuni, links),
      title: (
        <span>
          Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo il
          servizio di autospurgo in tutti i comuni della provincia di {name}:
        </span>
      ),
    };
  }
  return null;
}

export function getContactStuff({ title }) {
  return {
    preTitle: "Per ogni tua problematica e urgenza riguardante",
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
        per ispezionare le fognature, scarichi e fosse biologiche difficilmente
        raggiungibili con altri mezzi, permettendoci di risolvere ogni
        problematica inerente il servizio di {title} dei nostri clienti in tempi
        brevi.
      </span>
    ),
    images: [
      {
        src: "https://www.maggi-mariano.it/immagini/misc/Telecamera-14-1-1.jpg",
        alt: `Videocamera ispezioni per ${title}`,
      },
    ],
    formTitle:
      "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
    variant: "horizontal",
    imageDimensions: { width: 650, height: 850 },
  };
}

export function getBaseLocationsData({ links, serviceName }) {
  return {
    items: makeNavGridItems(province, links),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo il
        servizio di {serviceName} in tutte le province italiane:
      </span>
    ),
  };
}

export function getDescription({ mainContent }) {
  return `La ditta Maggi Mariano Servizi Ecologici effettua il servizio di ${mainContent}, al fianco di aziende e cittadini e per la salvaguardia dell'ambiente.`;
}

export function getOpenGraphMetadata({ title, description }) {
  return {
    title,
    description,
    url: `https://${appConfig.misc.url}`,
    locale: "it_IT",
    type: "website",
    images: [
      {
        width: 131,
        height: 48,
        url: `https://${appConfig.misc.url}/immagini/logo.png`,
        alt: title,
      },
    ],
  };
}

/**
 * @returns
 * @param {{title: string, canonicalLink?: string}} param0
 */
export function getMetadata({ title, canonical }) {
  const description = getDescription({
    mainContent: title,
  });
  return {
    title: `${title} - Maggi Mariano Servizi Ecologici`,
    description,
    openGraph: getOpenGraphMetadata({ title, description }),
    alternates: {
      canonical: `${appConfig.data.baseUrl}${canonical}`,
    },
  };
}

/**
 * @typedef {{href: string, label: string}} LocationDataItem
 * @typedef {{title: string, items: LocationDataItem}} LocationsData
 * @param {{
 *      title: string,
 *      locationsData?: LocationsData,
 *      locationNames?: {label: string, href: string},
 *      getBaseProps: (args: {title: string, mobile: boolean, locationsData: LocationsData}) => any,
 *      Components: {Desktop: any, Mobile: any}
 * }} param0
 * @returns
 */
export function withBaseProps({
  title,
  locationsData,
  locationNames,
  additionalServiceLocations,
  getBaseProps,
  Components,
}) {
  /* dynamically imported page according to viewport dimension (at request time) */
  const ConditionalPage = withConditionalRendering(Components);
  return memo(async ({ searchParams }) => {
    const mobile = searchParams?.viewport === "mobile";
    const isBot = searchParams?.isBot === "true";

    /* gets base props for current page, using provided getBaseProps prop */
    const props = getBaseProps({
      title,
      mobile,
      locationsData,
      additionalServiceLocations,
      isBot,
    });
    return (
      <ConditionalPage
        {...props}
        searchParams={searchParams}
        locationNames={locationNames}
        onContactFormSubmit={onContactFormSubmit}
      />
    );
  });
}
