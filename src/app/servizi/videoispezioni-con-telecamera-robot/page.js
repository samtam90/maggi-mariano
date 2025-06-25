import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";

const imgDims = { width: 1024, height: 1024 };

export function getProps({ mobile }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: "Videoispezioni con telecamera robot",
          right: "Maggi Mariano Servizi Ecologici",
        },
        sections: [
          {
            paragraphs: [
              "Maggi Mariano Servizi Ecologici srl si è dotata da tempo di un modernissimo robot con telecamera per effettuare videoispezioni in ambienti o tubature altrimenti difficili da raggiungere.",
              "Il robot teleguidato permette la registrazione delle immagini che possono essere studiate successivamente per risolvere le problematiche più difficili.",
              "Le configurazioni possibili del macchinario sono molteplici per adattarlo e tutte le situazioni, terreni e ambienti.",
            ],
            mediaElements: [
              {
                type: "iframe",
                src: "https://www.youtube.com/embed/opa5Ytppm4Q?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fservizi%2Fvideoispezioni-con-telecamera-robot%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2F&vf=1",
                dimensions: { width: 640, height: 360 },
                mediaPosition: "right",
                label: "Videoispezioni con telecamera robot",
              },
            ],
            mediaPosition: mobile ? "bottom" : "right",
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [],
            mediaPosition: "bottom",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/telecamera-2.jpg",
                label: `Videoispezioni con telecamera robot 1`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/telecamera-1.jpg",
                label: `Videoispezioni con telecamera robot 2`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/Telecamera-5-.jpg",
                label: `Videoispezioni con telecamera robot 3`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/Telecamera-14-.jpg",
                label: `Videoispezioni con telecamera robot 4`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/telecamera-3.jpg",
                label: `Videoispezioni con telecamera robot 5`,
                dimensions: imgDims,
              },
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/telecamera-5.jpg",
                label: `Videoispezioni con telecamera robot 6`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "grid-cols-1 lg:grid-cols-3" },
          },
        ],
      },
      contacts: {
        preTitle: "Per ogni tua problematica ed urgenza riguardante",
        title: "Videoispezioni con telecamera robot",
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
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-5-1-1.jpg",
            alt: "Image1",
          },
          {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-14-1-1.jpg",
            alt: "Image2",
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

export const metadata = {
  title:
    "Videoispezioni con telecamera robot - Maggi Mariano Servizi Ecologici",
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export default function Page({ searchParams }) {
  const mobile = searchParams?.viewport === "mobile";
  return (
    <ConditionalPage
      {...getProps({ mobile })}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
    />
  );
}
