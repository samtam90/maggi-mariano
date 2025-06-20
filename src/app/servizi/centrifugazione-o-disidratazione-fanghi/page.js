import { withConditionalRendering } from "@/misc/functions";
import dynamic from "next/dynamic";

const imgDims = { width: 1024, height: 1024 };

function getProps({ mobile }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: "Centrifugazione o disidratazione",
          right: "Fanghi",
        },
        sections: [
          {
            paragraphs: [
              "La Maggi Mariano Servizi Ecologici srl dispone di unità mobili di centrifugazione di ultima generazione, autorizzate al trattamento dei fanghi civili ed industriali completamente autonome.",
              "Ogni unità è costituita da una centrifuga mobile ad asse orizzontale, gruppo elettrogeno silenziato, stazione per la preparazione a ciclo continuo di poliettrolita in emulsione liquida, misuratore di portata e di concentrazione, trituratore e furgone allestito con officina d’appoggio.",
              "Mettiamo anche a disposizione dei nostri clienti adeguati container per lo stoccaggio dei fanghi disidratati e effettuiamo anche il loro eventuale smaltimento.",
            ],
            mediaElements: [
              {
                type: "iframe",
                src: "https://www.youtube.com/embed/IHnfAuhtzPU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fcentrifugazione-o-disidratazione-fanghi%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fautospurgo%2Fautospurgo-anghiari%2F&vf=1",
                dimensions: { width: 640, height: 360 },
                mediaPosition: "right",
                label: "Centrifugazione o disidratazione fanghi",
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: {root: "mb-8"}
          },
          {
            title: "COSA E' LA DISIDRATAZIONE FANGHI",
            paragraphs: [
              "La disidratazione o deacquificazione è un trattamento a cui vengono sottoposti i fanghi provenienti dalla linea fanghi di un impianti di depurazione o di potabilizzazione, al fine di ridurne il tenore di acqua e rendere più economiche e più facili le successive operazioni di trattamento e smaltimento – smaltimento diretto (ad esempio in agricoltura) o incenerimento.",
              "La deacquificazione può essere realizzata sia su un fango ancora grezzo che su uno stabilizzato. Dopo il trattamento il fango si presenta come un materiale di consistenza semisolida.",
              "Nel caso in cui sia previsto l'incenerimento del fango, un trattamento di disidratazione ha lo scopo anche di aumentare il potere calorifico del fango stesso.",
            ],
            mediaPosition: "bottom",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/centrifugazione_fanghi_1.jpg",
                label: "Centrifugazione o disidratazione fanghi 1",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/centrifugazione_fanghi_2.jpg",
                label: "Centrifugazione o disidratazione fanghi 2",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/centrifuga-1.jpg",
                label: "Centrifugazione o disidratazione fanghi 3",
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/centrifuga-2.jpg",
                label: "Centrifugazione o disidratazione fanghi 4",
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "grid-cols-1 lg:grid-cols-4" },
          },
        ],
      },
    },
  };
}

export const ConditionalPage = withConditionalRendering({
  Mobile: dynamic(() => import("@/templates/MainContent/alt/mobile")),
  Desktop: dynamic(() => import("@/templates/MainContent/alt/desktop")),
});

export default function Page({ searchParams }) {
  const mobile = searchParams?.viewport === "mobile";
  return (
    <ConditionalPage {...getProps({ mobile })} searchParams={searchParams} />
  );
}
