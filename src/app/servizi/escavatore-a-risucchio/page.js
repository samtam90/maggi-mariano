import { withConditionalRendering } from "@/misc/functions";

const props = {
  sections: {
    mainContent: {
      title: {
        left: "Escavatore",
        right: "a risucchio",
      },
      sections: [
        {
          title: "Funzionamento dell'escavatore",
          paragraphs: [
            "Nel meccanismo dell’escavatore a risucchio è presente una ventola che genera una corrente d’aria fino a 44.000 mb/h e produce una sottopressione massima di 55.000 Pa. Il materiale viene dunque aspirato tramite la corrente d’aria.",
            "Con questo mezzo possono essere aspirati tutti i tipi di materiali solidi fino ad una dimensione massima di 250 mm.",
            "La posizione del contenitore di raccolta dell’escavatore a risucchio fa si che gli assi del veicolo non vengano sollecitati.",
            "L’aria che permette l’aspirazione del materiale passa poi in una camera separata dal contenitore di raccolta dove viene pulita, ed attraverso filtri vengono assorbite le polveri rimanenti.",
            "L’aria pulita viene espulsa fuori dall’alto senza produrre forti rumori grazie ad un isolamento acustico.",
            "La pulizia dei filtri avviene invece tramite aria pneumatica.",
            "Durante il processo di scarico a ribalta viene svuotato sia il contenitore di raccolta che la camera separata da eventuali residui.",
            "Il materiale che viene aspirato si deposita nel cassone che ha una capacità di 8 m3.",
            "Lo svuotamento avviene lateralmente tramite ribaltamento.",
            "Questa operazione può essere eseguita anche all’interno di cassoni scarrabili destinati poi a un rapido smaltimento nel pieno rispetto dell’ambiente.",
          ],
          mediaElements: [
            {
              type: "iframe",
              src: "https://www.youtube.com/embed/UofrvZHT7NA?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fescavatore-a-risucchio-come-funziona%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fcentrifugazione-o-disidratazione-fanghi%2F&vf=1",
              dimensions: { width: 640, height: 360 },
              label: "Escavatore a risucchio 1",
            },
            {
              type: "image",
              src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-2-1024x682.jpg",
              dimensions: { width: 1024, height: 1024 },
              label: "Escavatore a risucchio 2",
            },
          ],
          mediaPosition: "bottom",
          classNames: { root: "mb-8", mediaGrid: "grid-cols-1 lg:grid-cols-2" },
        },
        {
          title: "VANTAGGI DELL’ESCAVATORE A RISUCCHIO",
          paragraphs: [
            "Abbattimento dei costi e dei tempi di esecuzione dei lavori.",
            "Manodopera: basta un operaio per manovrare il tubo di aspirazione.",
          ],
        },
      ],
    },
  },
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage {...props} searchParams={searchParams} />;
}
