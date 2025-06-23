import { withConditionalRendering } from "@/misc/functions";

const imgDims = { width: 1024, height: 1024 };

function getProps({ mobile }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: "Noleggio",
          right: "Container e cassoni",
        },
        sections: [
          {
            paragraphs: [
              "Maggi Mariano Servizi Ecologici srl offre una vasta gamma di container scarrabili a noleggio.",
              " container possono essere utilizzati per la raccolta di rifiuti solidi speciali, pericolosi e non pericolosi, dai calcinacci, ai fanghi, al materiale ferroso, agli imballaggi. Abbiamo container di varie dimensioni, scoperti e coperti.",
              "Quando il container raggiunge la massima capienza prevista, Maggi Mariano Servizi Ecologici srl interviene per la rimozione e la sostituzione del dispositivo, il cui cotenuto viene smaltito secondo le modalità previste per legge.",
            ],
            mediaElements: [
              {
                type: "iframe",
                src: "https://www.youtube.com/embed/jlIMca-i5qg?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fnoleggio-container-e-cassoni%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fnoleggio-bagni-chimici%2Fnoleggio-bagni-chimici-arezzo%2F&vf=6",
                dimensions: { width: 640, height: 360 },
                label: "Escavatore a risucchio 1",
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: { root: "mb-8" },
          },
          {
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/container-1.jpg",
                label: "Noleggio container e cassoni 1",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/container-2.jpg",
                label: "Noleggio container e cassoni 2",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/container-3.jpg",
                label: "Noleggio container e cassoni 3",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/container-4.jpg",
                label: "Noleggio container e cassoni 4",
                dimensions: imgDims,
              },
            ],
            mediaPosition: "bottom",
            classNames: { mediaGrid: "lg:grid-cols-4" },
          },
        ],
      },
    },
  };
}

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
