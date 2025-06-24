import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import { links } from "../../../../app.config";

export function getProps({ title }) {
  return {
    sections: {
      top: {
        title: title,
        subtitle: "vantaggi e usi",
        image: {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/frantumatore-mobile.jpg",
          dimensions: { width: 1200, height: 800 },
          alt: "Frantumatore mobile",
        },
        paragraphs: [
          "Se hai una impresa edile, di costruzioni, se ti occupi di ristrutturazioni allora sicuramente anche tu devi affrontarte il problema quotidiano che si presente alle imprese come la tua: SMALTIMENTO DELLE MACERIE, TRASPORTO DELLE STESSE IN CAVA, COSTI DA SOSTENERE",
          "Pensa a tutti i vantaggi che possono esserci nell'effettuare la selezione e il trattamento degli scarti di lavorazione edilizia dirrettamente nel luogo dove vengono prodotti e magari, se il materiale lo permette, il vantaggio di poterli riutilizzare in successive fasi di lavorazione.",
          "Tutto questo comporterebbe sicuramente un guadagno sia in termini di tempo impiegato ma anche un guadagno diretto in termini economici: risparmio nel non dover trasportare il materiale in cava, risparmio, laddove possibile, nel poterlo riutilizzare immediatamente senza acquistarne altro.",
        ],
      },
      middle: {
        preTitle:
          "Recentemente abbiamo inserito nel nostro parco macchine un FRANTOIO MOBILE DI INERTI, questo strumento permette il trattamento dei rifiuti di produzione di materiali compositi a  base di cemento, mattoni, mattonelle, ceramiche, rifiuti generati dalle attività di demolizione, miscele bituminose e molti altri.",
        title: `Come è fatto il ${title}`,
        paragraphs: [
          "La macchina è dotata di un’ampia tramoggia di carico, di un frantoio a mascelle e di un nastro trasportatore che conduce il materiale nel percorso di trattamento fino all’ottenimento di frazioni inerti a granulometria idonea e selezionata.",
          "L’impianto mobile è inoltre dotato di un nastro magnetico deferrizzatore per l’estrazione e lo scarico laterale delle frazioni metalliche presenti nei rifiuti oggetto di recupero.",
          "Il vaglio è alimentato da motore diesel.",
          "L’operatore tramite pala gommata provvede all’alimentazione del vaglio scaricando i rifiuti da vagliare nella tramoggia di alimentazione della macchina.",
          "Il vaglio provvede quindi a selezionare i rifiuti in n. 3 frazioni granulometriche desiderate.",
          "Suddette frazioni vengono depositate in cumuli distinti lateralmente (ovvero lato destro e sinistro) e posteriormente al vaglio.",
        ],
      },
      bottom: {
        title: {
          left: "I vantaggi del noleggio",
          right: title,
        },
        image: {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/frantumatore-mobile.jpg",
          alt: "Frantumatore mobile",
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
              "Recuperare i materiali riciclabili deve essere l’obiettivo principe di tutte le aziende, specialmente nel settore delle costruzioni e ristrutturazioni. Oltre al risparmio per le aziende stesse questo porta enormi vantaggi all’ambiente!",
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
      locations: {
        items: [
          {
            label: "Arezzo",
            href: links.servizi["frantoio-mobile-inerti"].arezzo,
          },
          {
            label: "Firenze",
            href: links.servizi["frantoio-mobile-inerti"].arezzo,
          },
          {
            label: "Grosseto",
            href: links.servizi["frantoio-mobile-inerti"].grosseto,
          },
          {
            label: "Livorno",
            href: links.servizi["frantoio-mobile-inerti"].livorno,
          },
          {
            label: "Lucca",
            href: links.servizi["frantoio-mobile-inerti"].lucca,
          },
          {
            label: "Massa Carrara",
            href: links.servizi["frantoio-mobile-inerti"]["massa-carrara"],
          },
          {
            label: "Pisa",
            href: links.servizi["frantoio-mobile-inerti"].pisa,
          },
          {
            label: "Pistoia",
            href: links.servizi["frantoio-mobile-inerti"].pistoia,
          },
          {
            label: "Prato",
            href: links.servizi["frantoio-mobile-inerti"].prato,
          },
          {
            label: "Siena",
            href: links.servizi["frantoio-mobile-inerti"].siena,
          },
        ],
        title: "Operiamo in tutti i comuni delle province della Toscana:",
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
        images: [
          {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/frantumatore-mobile.jpg",
            alt: "Image1",
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
  Mobile: import("@/templates/AltMainContent/alt/mobile"),
  Desktop: import("@/templates/AltMainContent/alt/desktop"),
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

export default withBaseProps({ title: "Frantoio mobile inerti" });
