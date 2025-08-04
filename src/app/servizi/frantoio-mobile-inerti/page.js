import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig, { links } from "../../../../app.config";
import { HighlightedText } from "../centrifugazione-o-disidratazione-fanghi/page";
import province from "../../../../.data/province.json";
import { getDescription, getOpenGraphMetadata } from "@/app/layout";

export function getProps({ title, locationsData }) {
  return {
    sections: {
      top: {
        title: title,
        subtitle: "vantaggi e usi",
        image: {
          src: "https://www.maggi-mariano.it/immagini/misc/frantumatore-mobile.jpg",
          dimensions: { width: 1200, height: 800 },
          alt: `${title} 1`,
        },
        paragraphs: [
          <span>
            Se hai una impresa edile, di costruzioni, se ti occupi di
            ristrutturazioni allora sicuramente anche tu devi affrontare il
            problema quotidiano che si presente alle imprese come la tua: &nbsp;
            <HighlightedText>
              smaltimento delle macerie, trasporto delle stesse in cava, costi
              da sostenere.
            </HighlightedText>
          </span>,
          <HighlightedText>
            Pensa a tutti i vantaggi che possono esserci nell'effettuare la
            selezione e il trattamento degli scarti di lavorazione edilizia
            direttamente nel luogo dove vengono prodotti e magari, se il
            materiale lo permette, il vantaggio di poterli riutilizzare in
            successive fasi di lavorazione.
          </HighlightedText>,
          "Tutto questo comporterebbe sicuramente un guadagno sia in termini di tempo impiegato ma anche un guadagno diretto in termini economici: risparmio nel non dover trasportare il materiale in cava, risparmio, laddove possibile, nel poterlo riutilizzare immediatamente senza acquistarne altro.",
        ],
      },
      middle: {
        preTitle: (
          <HighlightedText>
            Recentemente abbiamo inserito nel nostro parco macchine un FRANTOIO
            MOBILE DI INERTI, questo strumento permette il trattamento dei
            rifiuti di produzione di materiali compositi a base di cemento,
            mattoni, mattonelle, ceramiche, rifiuti generati dalle attività di
            demolizione, miscele bituminose e molti altri.
          </HighlightedText>
        ),
        title: `Come è fatto il ${title}`,
        paragraphs: [
          "La macchina è dotata di un'ampia tramoggia di carico, di un frantoio a mascelle e di un nastro trasportatore che conduce il materiale nel percorso di trattamento fino all'ottenimento di frazioni inerti a granulometria idonea e selezionata.",
          "L'impianto mobile è inoltre dotato di un nastro magnetico deferrizzatore per l'estrazione e lo scarico laterale delle frazioni metalliche presenti nei rifiuti oggetto di recupero.",
          "Il vaglio è alimentato da motore diesel.",
          "L'operatore tramite pala gommata provvede all'alimentazione del vaglio scaricando i rifiuti da vagliare nella tramoggia di alimentazione della macchina.",
          "Il vaglio provvede quindi a selezionare i rifiuti in n. 3 frazioni granulometriche desiderate.",
          "Suddette frazioni vengono depositate in cumuli distinti lateralmente (ovvero lato destro e sinistro) e posteriormente al vaglio.",
          <span>
            La capacità di produzione massima dell'impianto mobile è pari a 70
            t/h, considerando 8 ore lavorative al giorno e 220 giorni lavorativi
            all'anno si ha che l'impianto mobile potrebbe teoricamente al
            massimo recuperare: <br />
            • &nbsp; giornalmente: 560 t/g; <br />• &nbsp; annualmente: 123.200
            t/anno.
          </span>,
        ],
      },
      bottom: {
        title: {
          left: "I vantaggi del noleggio",
          right: title,
        },
        image: {
          src: "https://www.maggi-mariano.it/immagini/misc/frantumatore-mobile.jpg",
          alt: `${title} 2`,
          dimensions: { width: 1200, height: 800 },
        },
        items: [
          {
            title: "Smaltimento",
            content:
              "Riducendo volumetricamente gli inerti, tutti gli scarti possono essere riutilizzati in successive lavorazioni edili senza preoccuparsi del loro smaltimento.",
          },
          {
            title: "Rispetto dell'ambiente",
            content:
              "Recuperare i materiali riciclabili deve essere l'obiettivo principe di tutte le aziende, specialmente nel settore delle costruzioni e ristrutturazioni. Oltre al risparmio per le aziende stesse questo porta enormi vantaggi all'ambiente!",
          },
          {
            title: "Assistenza tecnica",
            content:
              "Non avrai nessun problema, sarai seguito da un nostro operatore e provvederemo anche al disbrigo di tutte le pratiche e i documenti richiesti.",
          },
          {
            title: "Risparmio",
            content:
              "Noleggiare un macchinario come il FRANTOIO DI INERTI ti evita di dover fare investimenti ingenti: avrai a disposizione la macchina quando ti serve e solo per il tempo necessario, eliminando anche i costi fissi che un mezzo del genere comporta.",
          },
        ],
      },
      locations: locationsData || {
        items: makeNavGridItems(
          province,
          appConfig.links.servizi["frantoio-mobile-inerti"]
        ),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> rendiamo
            disponibile il nostro frantoio mobile inerti in tutte le province
            italiane:
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
            src: "https://www.maggi-mariano.it/immagini/misc/frantumatore-mobile.jpg",
            alt: `${title} 3`,
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

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/AltMainContent/alt/mobile"),
  Desktop: import("@/templates/AltMainContent/alt/desktop"),
});

export const metadata = getMetadata({
  title: "Frantoio mobile inerti",
  canonical: links.servizi["frantoio-mobile-inerti"].root,
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

export default withBaseProps({ title: "Frantoio mobile inerti" });
