import React from "react";
import { withConditionalRendering } from "@/misc/functions";
import dynamic from "next/dynamic";

const props = {
  sections: {
    top: {
      title: (
        <span>
          Video <br /> Ispezioni
        </span>
      ),
      subtitle: "con telecamera robot",
      imageSrc:
        "https://www.maggi-mariano.it/wp-content/uploads/2022/05/home-1.jpg",
      link: {
        label: "Scopri di più",
        href: "https://www.maggi-mariano.it",
      },
    },
    description: {
      headerImages: [
        {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi-white.png",
          alt: "Maggi 1",
          dimensions: { width: 300, height: 110 },
        },
        {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/eco.png",
          alt: "Maggi 2",
          dimensions: { width: 85, height: 105 },
        },
      ],
      items: [
        {
          paragraphs: [
            "Da oltre quarant'anni, la nostra azienda opera nel settore dei servizi ecologici, mettendo a disposizione delle industrie, dei privati e degli enti un valido supporto nella gestione dei rifiuti speciali e pericolosi.",
            "Grazie alla nostra vasta esperienza, siamo in grado di offrire servizi di alta qualità, che comprendono il ritiro, il trasporto e lo smaltimento o il recupero dei rifiuti, nonché lo svuotamento e lo spurgo di fosse biologiche, la stasatura delle condotte, le videoispezioni e la disidratazione dei fanghi di depurazione civili e industriali.",
            "Inoltre, offriamo anche il noleggio di bagni chimici per eventi e manifestazioni, la raccolta di ferro e metalli in genere, il trasporto dell'acqua e molti altri servizi, sempre nel rispetto dell'ambiente.",
            "Tutti i nostri servizi sono svolti con la massima attenzione alla sicurezza e alla protezione dell'ambiente, in linea con le normative vigenti e con la massima trasparenza nei confronti dei nostri clienti. Ci impegniamo a offrire un servizio completo e di alta qualità, sempre al passo con le nuove tecnologie e le esigenze del mercato.",
          ],
          image: {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
            alt: "Servizio 1",
          },
          imagePosition: "end",
        },
        {
          paragraphs: [
            "Grazie alla collaborazione con personale qualificato, Maggi Mariano Servizi Ecologici srl garantisce la massima qualità e sicurezza dei servizi erogati, ed è un partner ideale per tutte le aziende che sono alla ricerca di servizi innovativi, efficienti, puntuali e sicuri per la gestione dei rifiuti.",
          ],
          image: {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
            alt: "Servizio 2",
          },
          imagePosition: "start",
        },
      ],
    },
    highlightedContent: {
      paragraphs: [
        "Recentemente abbiamo inserito nel nostro parco macchine un FRANTOIO MOBILE DI INERTI, questo strumento permette il trattamento dei rifiuti di produzione di materiali compositi a base di cemento, mattoni, mattonelle, ceramiche, rifiuti generati dalle attività di demolizione, miscele bituminose e molti altri.",
        "La macchina è dotata di un'ampia tramoggia di carico, di un frantoio a mascelle e di un nastro trasportatore che conduce il materiale nel percorso di trattamento fino all'ottenimento di frazioni inerti a granulometria idonea e selezionata.",
        "L'impianto mobile è inoltre dotato di un nastro magnetico deferrizzatore per l'estrazione e lo scarico laterale delle frazioni metalliche presenti nei rifiuti oggetto di recupero.",
        "Il vaglio è alimentato da motore diesel. L'operatore tramite pala gommata provvede all'alimentazione del vaglio scaricando i rifiuti da vagliare nella tramoggia di alimentazione della macchina. Il vaglio provvede quindi a selezionare i rifiuti in n. 3 frazioni granulometriche desiderate. Suddette frazioni vengono depositate in cumuli distinti lateralmente (ovvero lato destro e sinistro) e posteriormente al vaglio.",
        "La capacità di produzione massima dell'impianto mobile è pari a 70 t/h, considerando 8 ore lavorative al giorno e 220 giorni lavorativi all'anno si ha che l'impianto mobile potrebbe teoricamente al massimo recuperare:",
      ],
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/frantumatore-mobile.jpg",
        alt: "Image",
        dimensions: { width: 700, height: 300 },
      },
      link: {
        href: "https://www.maggi-mariano.it/frantoio-mobile-inerti/",
        label: "Ulteriori informazioni sul frantoio mobile",
      },
      title: { left: "New: ", right: "FRANTOIO MOBILE DI INERTI" },
    },
    feedback: {
      autoScrollTimeoutMs: 5000,
      title: "Dicono di noi",
      items: [
        {
          title: "Simone Soldani",
          subtitle: "I am a useless subtitle",
          stars: { total: 5, filled: 5 },
          content:
            "Sono rimasto colpito dalla tempestività della intervento  da parte dell azienda, e della professionalità  dell operatore.bisogno, li richiamerei sicuramente.",
        },
        {
          title: "Simone Soldani",
          subtitle: "I am a useless subtitle",
          stars: { total: 5, filled: 5 },
          content:
            "Sono rimasto colpito dalla tempestività della intervento  da parte dell azienda, e della professionalità  dell operatore.bisogno, li richiamerei sicuramente.",
        },
        {
          title: "Simone Soldani",
          subtitle: "I am a useless subtitle",
          stars: { total: 5, filled: 5 },
          content:
            "Sono rimasto colpito dalla tempestività della intervento  da parte dell azienda, e della professionalità  dell operatore.bisogno, li richiamerei sicuramente.",
        },
      ],
    },
  },
};

const ConditionalPage = withConditionalRendering({
  Mobile: dynamic(() => import("@/templates/Home/alt/mobile")),
  Desktop: dynamic(() => import("@/templates/Home/alt/desktop")),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
