import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import province from "../../../../.data/province.json";

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
              `Quando hai bisogno di una azienda che effettua il ${title}, sia acqua potabile che acqua per irrigazione o il trasporto acqua per piscine allora chiamaci e ti forniremo tutte le informazioni`,
              `La nostra azienda è specializzata nel ${title}, potabile o per il riempimento di piscine, cisterne, depositi, strutture ricettive come agriturismi, albeghi e impianti sportivi.`,
              "I nostri automezzi, di diverse dimensioni e portata, possono raggiungere la vostra piscina o cisterna in qualsiasi località fra le province coperte dal servizio, risolvendo le vostre necessità in modo pratico e immediato.",
              "Il nostro servizio soddisfa qualunque esigenza legata alle dimensioni e alla capacità della vostra piscina o cisterna, permettendovi di superare i problemi relativi all’approvvigionamento dalla rete idrica locale, spesso regolato da restrittive ordinanze comunali.",
            ],
            mediaElements: [
              {
                type: "iframe",
                src: "https://www.youtube.com/embed/NhRZHDKfWlQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Ftrasporto-acqua%2Ftrasporto-acqua-castel-focognano%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2F&vf=1",
                dimensions: { width: 640, height: 360 },
                mediaPosition: "right",
                label: title,
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `In stagioni particolarmente calde e con elevata siccità, il nostro servizio di ${title} permettere di risolvere ed ovviare i problemi che possono derivare dalla mancanza di approvvigionamento tramite la rete idrica.`,
              "Esistono realtà locali, piccoli comuni o frazioni che durante il periodo estivo o in particolari periodi dell'anno, hanno grosse difficoltà nel garantire una adeguata fornitura di acqua potabile ai cittadini. La nostra azienda tramite il trasporto acqua potabile in cisterne permette rifornire i depositi e garantire una fornitura costante di acqua alle abitazioni o alle attività commerciali presenti.",
              `Il ${title} viene spesso utilizzato per il riempimento delle piscine delle attività turistiche, degli albergi e anche delle abitazioni private. In particolari periodi dell’anno molti comuni vietano e sanzionano l’uso dell’acqua della rete idrica locale per questo utilizzo.`,
              `Spesso i pozzi presenti nelle strutture non riescono a garantire un quantitativo adeguato di acqua per il riempimento di una piscina di media o grande dimensione, di conseguenza il ${title} in cisterne risulta essere la soluzione più veloce e spesso anche più economica.`,
            ],
            mediaPosition: "bottom",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-1.jpg",
                label: `${title} 1`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-3.jpg",
                label: `${title} 3`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "grid-cols-1 lg:grid-cols-3" },
          },
        ],
      },
      locations: locationsData || {
        items: makeNavGridItems(
          province,
          appConfig.links.servizi["trasporto-acqua"]
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
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/acqua.jpg",
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

export const metadata = getMetadata({ title: "Trasporto acqua" });
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

export default withBaseProps({ title: "Trasporto acqua" });
