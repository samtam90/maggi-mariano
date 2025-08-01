import React from "react";
import HomeTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/Home",
  component: HomeTemplate,
};

const T = (args) => (
  <AppThemeProvider>
    <HomeTemplate {...args} />
  </AppThemeProvider>
);
const imgDim = window.innerWidth * 0.5;

export const Base = T.bind({});
Base.args = {
  mobile: false,
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
      link: { label: "Lol", href: "https://www.google.it" },
    },
    description: {
      headerImages: [
        {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi-white.png",
          alt: "Maggi",
          dimensions: { width: 300, height: 110 },
        },
        {
          src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/eco.png",
          alt: "Maggi",
          dimensions: { width: 85, height: 105 },
        },
      ],
      items: [
        {
          paragraphs: [
            "Da oltre quarant'anni, la nostra azienda opera nel settore dei servizi ecologici, mettendo a disposizione delle industrie, dei privati e degli enti un valido supporto nella gestione dei rifiuti speciali e pericolosi.",
            "Grazie alla nostra vasta esperienza, siamo in grado di offrire servizi di alta qualità, che comprendono il ritiro, il trasporto e lo smaltimento o il recupero dei rifiuti, nonché lo svuotamento e lo spurgo di fosse biologiche, la stasatura delle condotte, le videoispezioni e la disidratazione dei fanghi di depurazione civili e industriali.",
            "Inoltre, offriamo anche il noleggio di bagni chimici per eventi e manifestazioni, la raccolta di ferro e metalli in genere, il trasporto dell’acqua e molti altri servizi, sempre nel rispetto dell’ambiente.",
            "Tutti i nostri servizi sono svolti con la massima attenzione alla sicurezza e alla protezione dell’ambiente, in linea con le normative vigenti e con la massima trasparenza nei confronti dei nostri clienti. Ci impegniamo a offrire un servizio completo e di alta qualità, sempre al passo con le nuove tecnologie e le esigenze del mercato.",
          ],
          image: {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
            alt: "Servizio 1",
            dimensions: { width: imgDim, height: imgDim },
          },
          imagePosition: "end",
        },
        {
          paragraphs: [
            "Grazie alla collaborazione con personale qualificato, Maggi Mariano Servizi Ecologici SRL garantisce la massima qualità e sicurezza dei servizi erogati, ed è un partner ideale per tutte le aziende che sono alla ricerca di servizi innovativi, efficienti, puntuali e sicuri per la gestione dei rifiuti.",
          ],
          image: {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/maggi-servizi-2.jpg",
            alt: "Servizio 1",
            dimensions: { width: imgDim, height: imgDim },
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
        label: "Per maggiori informazioni clicca qui",
      },
      title: { left: "New: ", right: "FRANTOIO MOBILE DI INERTI" },
    },
    feedback: {
      title: "Dicono di noi",
      items: [
        {
          title: "Simone Soldani",
          stars: { total: 5, filled: 5 },
          content:
            "Sono rimasto colpito dalla tempestività della intervento  da parte dell azienda, e della professionalità  dell operatore.bisogno, li richiamerei sicuramente.",
        },
        {
          title: "Jessica Lepri",
          stars: { total: 5, filled: 5 },
          content: "Professionali, veloci e corretti. Ottimo servizio.",
        },
        {
          title: "Stefania Vestrucci",
          stars: { total: 5, filled: 5 },
          content:
            "Molto disponibili e precisi. Lavoro preciso e con meticolosità. Grazie.",
        },
        {
          title: "Massimo Mazzoli",
          stars: { total: 5, filled: 5 },
          content:
            "Nonostante che il mio giudizio che esprimerò ritengo che sia molto di parte essendo  amico  e  cliente fin da quando ero bambino della ditta  maggi mariano quando ho avuto bisogno per risolvere un problema, ho ricevuto sempre consigli ottimi lavoro molto professionale e prezzo meraviglioso.",
        },
        {
          title: "Roberta Abbacuccio",
          stars: { total: 5, filled: 4 },
          content:
            "Non sono un esperta del settore per valutare il servizio dal lato economico. Ma posso dare la mia considerazione per le tempistiche (sono venuti il giorno seguente valutando telefonicamente l'urgenza), assistenza successiva avuta telefonicamente. L'uomo addetto allo svuotamento è stato puntuale e molto preciso, ripulendo per bene la piazzetta dopo il lavoro.",
        },
      ],
    },
  },
};
