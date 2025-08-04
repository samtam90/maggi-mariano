import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import { HighlightedText } from "../centrifugazione-o-disidratazione-fanghi/page";
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
              `${title}, wc chimici per cantieri stradali, cantieri edili, manifestazioni, fiere, feste e sagre. Trasporto direttamente in loco, installazione, manutenzione, pulizia e recupero al termine del servizio.`,
              <HighlightedText>
                Oltre ai bagni chimici classici, abbiamo anche bagni chimici per
                disabili appositamente progettati per essere fruiti da persone
                che utilizzano ausili come carrozzine o deambulatori.
              </HighlightedText>,
              "Questi wc, oltre a dimensioni maggiori della porta e degli spazi interni, vengono equipaggiati con accessori appositamente progettati, come lavandini e doccette, che possono essere facilmente utilizzati da persone con deficit motori. Allo stesso modo, il posizionamento in loco dei bagni chimici per disabili verrà studiato per agevolarne l’utilizzo e per garantire la massima accessibilità.",
            ],
            mediaElements: [
              {
                type: "iframe",
                label: title,
                src: "https://www.youtube.com/embed/TRBCoYQBJU8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fnoleggio-bagni-chimici%2Fnoleggio-bagni-chimici-arezzo%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fescavatore-a-risucchio-come-funziona%2F&vf=1",
                dimensions: { width: 640, height: 360 },
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              <HighlightedText>
                Il principale utilizzo dei wc chimici è all'interno di aerei,
                treni, camper, roulotte e campeggio, tuttavia il bagno chimico
                viene spessissimo installato presso cantieri edili o stradali,
                festival musicali, manifestazioni pubbliche e abitazioni
                temporaneamente non collegate alla fognatura.
              </HighlightedText>,
              "Il bagno chimico è un apparecchio sanitario che utilizza agenti chimici per disinfettare il vaso, ad esempio questo è estremamente utile in tutti quei casi in cui non sia possibile far defluire il contenuto del wc verso il sistema fognario.",
              "Gli agenti chimici utilizzati, oltre ai profumi, sono principalmente idrossido di sodio e formaldeide (metanale), rispettivamente con azione caustica e disinfettante, tuttavia talvolta la formaldeide è sostituita con agenti meno irritanti per le vie aeree dell’apparato respiratorio.",
              "Trasportiamo acqua potabile per il riempimento di cisterne e piscine per privati, alberghi, ristoranti, comunità e agriturismi.",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              <HighlightedText>
                Il {title} è la formula migliore per garantire le ideali
                condizioni di igiene in ambienti di lavoro come cantieri edili o
                stradali, feste paesane, concerti e manifestazioni pubbliche.
              </HighlightedText>,
              "La nostra azienda si occupa del trasporto in loco dei wc chimici a noleggio, del loro posizionamento, della pulizia e disinfezione periodica e programmata.",
              "Al termine del noleggio wc chimici provvediamo al loro ritiro, tutti i wc chimici a noleggio vengono sanificati con appositi, ispezionati per garantirne il funzionamento futuro.",
            ],
            mediaPosition: "bottom",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/interno-bagno-chimico.jpg",
                label: `${title} 1`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/wc-chimici.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/immagini/misc/wc-chimico2.jpg",
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
          appConfig.links.servizi["noleggio-bagni-chimici"]
        ),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> effettuiamo
            il servizio di noleggio bagni chimici in tutte le province italiane:
          </span>
        ),
      },
      contacts: {
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
        images: [
          {
            src: "https://www.maggi-mariano.it/immagini/misc/12248895_10206629587732692_810803295_n.jpg",
            alt: `${title} 4`,
          },
          {
            src: "https://www.maggi-mariano.it/immagini/misc/12270376_10206629588012699_1901414759_n.jpg",
            alt: `${title} 5`,
          },
        ],
        formTitle: `Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni su ${title}`,
        variant: "horizontal",
        imageDimensions: { width: 650, height: mobile ? 350 : 850 },
      },
    },
  };
}

export const metadata = getMetadata({ title: "Noleggio bagni chimici" });
export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export function Page({ searchParams, title, locationsData, locationNames }) {
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

export default withBaseProps({ title: "Noleggio Bagni Chimici" });
