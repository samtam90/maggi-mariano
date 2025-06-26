import { withConditionalRendering } from "@/misc/functions";

const dims = { width: 640, height: 380 };
const props = {
  title: {
    left: "La nostra videogallery",
    right: "Maggi Mariano Servizi Ecologici",
  },
  videos: [
    {
      src: "https://www.youtube-nocookie.com/embed/opa5Ytppm4Q?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=1&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label:
        "VIDEOISPEZIONE FOGNATURA MAGGI MARIANO 0575 520447  POPPI CASENTINO  AREZZO FIRENZE TOSCANA",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/IHnfAuhtzPU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=3&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label:
        "DISIDRATAZIONE FANGHI BIOLOGICI  MAGGI MARIANO 0575 520447 POPPI CASENTINO AREZZO TOSCANA",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/TRBCoYQBJU8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=5&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label:
        "0575 520447 MAGGI MARIANO NOLEGGIO PULIZIA WC CHIMICI AREZZO CASENTINO POPPI BIBBIENA",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/jlIMca-i5qg?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=7&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label:
        "0575 520447 MAGGI MARIANO NOLEGGIO CASSONI SCARRABILI CONTAINER AREZZO CASENTINO TRASPORTO RIFIUTI",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/cVldgxt-edw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=9&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label:
        "NOLEGGIO ESCAVATORE MAGGI MARIANO 0575 520447 AREZZO POPPI CASENTINO",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/UofrvZHT7NA?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=11&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=6",
      label: "MAGGI MARIANO 0575 520447 ESCAVATORE A RISUCCHIO CASENTINO",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/NhRZHDKfWlQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=13&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=4",
      label: "MAGGI MARIANO 0575 520447 TRASPORTO ACQUA CASENTINO",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/ShqFrubuFWA?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=15&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=4",
      label:
        "MAGGI MARIANO 0575 520447 TRASPORTO RIFIUTI LIQUIDI AREZZO CASENTINO",
      dimensions: dims,
    },
    {
      src: "https://www.youtube-nocookie.com/embed/XRbBc-bl0ec?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.maggi-mariano.it&widgetid=17&forigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fvideogallery%2F&aoriginsup=1&gporigin=https%3A%2F%2Fwww.maggi-mariano.it%2Fcontatti%2F&vf=4",
      label: "0575520447 MAGGI MARIANO PULIZIA VASCA CON DOZER GEROTTO",
      dimensions: dims,
    },
  ],
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/VideoGallery/alt/mobile"),
  Desktop: import("@/templates/VideoGallery/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
