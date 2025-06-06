const baseUrl = "https://www.maggi-mariano.it";

const navBarSections = {
  Home: baseUrl,
  Autospurgo: {
    "Autospurgo Anghiari":
      "https://www.maggi-mariano.it/autospurgo/autospurgo-anghiari/",
    "Autospurgo Arezzo":
      "https://www.maggi-mariano.it/autospurgo/autospurgo-arezzo/",
  },
  Servizi: {
    "Frantoio mobile inerti": {
      "Frantoio mobile inerti Siena":
        "https://www.maggi-mariano.it/frantoio-mobile-inerti/frantoio-mobile-inerti-siena/",
      "Frantoio mobile inerti Arezzo":
        "https://www.maggi-mariano.it/frantoio-mobile-inerti/frantoio-mobile-inerti-arezzo/",
    },
    "Centrifugazione o disidratazione fanghi":
      "https://www.maggi-mariano.it/servizi/centrifugazione-o-disidratazione-fanghi/",
    "Noleggio bagni chimici": {
      "Noleggio bagni chimici Arezzo":
        "https://www.maggi-mariano.it/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-arezzo/",
      "Noleggio bagni chimici Anghiari":
        "https://www.maggi-mariano.it/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-anghiari/",
    },
  },
  Documenti: baseUrl,
  Videogallery: baseUrl,
  Contatti: baseUrl,
};

const servicesNavGridData = [
  {
    id: "service-1",
    title: "Recupero",
    subtitle: "Materiali ferrosi",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ferrosi-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-2",
    title: "Spurgo",
    subtitle: "Fosse biologiche",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/fosse-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-3",
    title: "Noleggio",
    subtitle: "Bagni chimici",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/bagni-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-4",
    title: "Trasporto",
    subtitle: "Acqua potabile",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-200-2.png",
    href: "https://www.google.it",
  },
  {
    id: "service-5",
    title: "Recupero",
    subtitle: "Materiali ferrosi",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ferrosi-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-6",
    title: "Spurgo",
    subtitle: "Fosse biologiche",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/fosse-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-7",
    title: "Noleggio",
    subtitle: "Bagni chimici",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/bagni-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-8",
    title: "Trasporto",
    subtitle: "Acqua potabile",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-200-2.png",
    href: "https://www.google.it",
  },
  {
    id: "service-9",
    title: "Recupero",
    subtitle: "Materiali ferrosi",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ferrosi-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-10",
    title: "Spurgo",
    subtitle: "Fosse biologiche",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/fosse-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-11",
    title: "Noleggio",
    subtitle: "Bagni chimici",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/bagni-200-1.png",
    href: "https://www.google.it",
  },
  {
    id: "service-12",
    title: "Trasporto",
    subtitle: "Acqua potabile",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-200-2.png",
    href: "https://www.google.it",
  },
];

module.exports = {
  data: {
    baseUrl,
    header: {
      navBarSections,
      logo: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi.png",
        alt: "Maggi Mariano",
      },
    },
    servicesGrid: {
      data: servicesNavGridData,
      decorationImageUrl:
        "https://www.maggi-mariano.it/wp-content/uploads/2022/06/round-1.png",
      backgroundImageUrl:
        "https://www.maggi-mariano.it/wp-content/uploads/2022/06/plant-growing-hand-green-nature-with-sunlight-eco-environment-concept_34152-2232-1.webp",
    },
  },
  misc: {
    mobileViewportThresholdPx: 768,
    logoDimensions: {
      width: 175,
      height: 50,
    },
  },
};
