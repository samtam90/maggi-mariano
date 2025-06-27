import { withConditionalRendering } from "@/misc/functions";

function getProps({ mobile }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: "Recupero materiali ferrosi",
          right: "Maggi Mariano Servizi Ecologici",
        },
        sections: [
          {
            paragraphs: [
              "Maggi Mariano Servizi Ecologici SRL è autorizzata al recupero dei materiali ferrosi, metalli in genere",
              "L’azienda dispone di camion ribaltabili, scarrabili, caricatori su strada e movimentazione interna su piazzali.",
              "Grazie alla pressa idraulica i materiali possono essere compattati direttamente in loco riducendo al minimo l’ingombro dei materiali da recuperare e facilitandone il trasporto per lo smaltimento adeguato.",
            ],
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/rottami-metallici.jpg",
                dimensions: { width: 1024, height: 1024 },
                label: "Recupero materiali ferrosi 1",
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: {
              root: "mb-8",
            },
          },
          {
            paragraphs: [
              "Per la salvaguardia dell’ambiente che ci circonda è necessario che i rifiuti siano correttamente recuperati e riciclati.",
              "Il ferro, sotto le sue varie forme e declinazioni, si presenta perfetto ad essere riciclato quasi all’infinito. Il riciclaggio rappresente una fonte economica importante per ogni paese industrializzato.",
              "Ovviamente è fondamentale affidarsi ad aziende specializzate e certificate, che possono effettuare tutte le operazioni corrette e indispensabili al riciclaggio per evitare imaptti negativi all’ambiente.",
            ],
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/pressa-ferro-1-.jpg",
                dimensions: { width: 1024, height: 1024 },
                label: "Recupero materiali ferrosi 1",
              },
            ],
            mediaPosition: mobile ? "bottom" : "left",
            classNames: {
              root: "mb-8",
            },
          },
        ],
      },
    },
  };
}

export const metadata = {
  title: "Recupero materiali ferrosi - Maggi Mariano Servizi Ecologici",
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export default function Page({ searchParams }) {
  const mobile = searchParams?.viewport === "mobile";
  return (
    <ConditionalPage {...getProps({ mobile })} searchParams={searchParams} />
  );
}
