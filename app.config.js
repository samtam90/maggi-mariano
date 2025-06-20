const baseUrl = "https://www.maggi-mariano.it";

const links = {
  autospurgo: {
    root: "/autospurgo",
    anghiari: "/autospurgo/autospurgo-anghiari",
    arezzo: "/autospurgo/autospurgo-arezzo",
    "badia-tedalda": "/autospurgo/autospurgo-badia-tedalda",
    bibbiena: "/autospurgo/autospurgo-bibbiena",
    bucine: "/autospurgo/autospurgo-bucine",
    capolona: "/autospurgo/autospurgo-capolona",
  },
};

const navBarSections = {
  Home: baseUrl,
  Autospurgo: {
    "Autospurgo Anghiari": links.autospurgo.anghiari,
    "Autospurgo Arezzo": links.autospurgo.arezzo,
    "Autospurgo Badia Tedalda": links.autospurgo["badia-tedalda"],
    "Autospurgo Bibbiena": links.autospurgo.bibbiena,
    "Autospurgo Bucine": links.autospurgo.bucine,
    "Autospurgo Capolona": links.autospurgo.capolona,
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

const mainTitleData = {
  title: "servizi ecologici",
  preTitle: "Maggi Mariano",
  subtitle:
    "Da sempre al fianco di aziende e cittadini per la salvaguardia dell'ambiente",
  imageSrc:
    "https://www.maggi-mariano.it/wp-content/uploads/2022/05/ecologia.jpg",
  button: {
    href: "https://www.maggi-mariano.it",
    label: "Per info o preventivi contattaci",
  },
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

const topNavBarData = {
  items: [
    {
      title: "Assistenza Clienti",
      link: {
        href: "tel:+390575520447",
        label: "+39 0575 520447",
      },
      icon: "phone",
    },
    {
      title: "Contatti",
      link: {
        href: "mailto:serviziecologici@maggimariano.it",
        label: "serviziecologici@maggimariano.it",
      },
      icon: "phone",
    },
    {
      title: "Rifiuti Liquidi",
      link: {
        href: "tel:+393343889878",
        label: "Cell.: +39 334 3889878",
      },
      icon: "phone",
    },
    {
      title: "Rifiuti Solidi",
      link: {
        href: "tel:+393343889878",
        label: "Cell.: +39 334 3889878",
      },
      icon: "phone",
    },
  ],
};

const footerData = {
  logo: {
    src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/img0001.png",
    alt: "Maggi Mariano",
    dimensions: { width: 175, height: 90 },
  },
  sections: [
    {
      title: "Le nostre sedi",
      navItems: [
        {
          title: "Via Aretina, 16",
          icon: "phone",
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Loc. San Giuliano snc",
          icon: "phone",
          link: {
            label: "52100 Arezzo (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Loc. San Giuliano snc",
          icon: "phone",
          link: {
            label: "52100 Arezzo (AR)",
            href: "https://www.google.it",
          },
        },
      ],
    },
    {
      title: "assistenza clienti",
      navItems: [
        {
          title: "Ufficio",
          icon: "phone",
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Rifiuti liquidi",
          icon: "phone",
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Rifiuti solidi",
          icon: "phone",
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Fax",
          icon: "phone",
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Email",
          icon: "phone",
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
      ],
    },
    {
      title: "Privacy",
      navItems: [
        {
          title: "Via Aretina, 16",
          icon: "phone",
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Via Aretina, 16",
          icon: "phone",
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
      ],
    },
    {
      title: "Servizi",
      navItems: [
        {
          title: "Via Aretina, 16",
          icon: "phone",
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Via Aretina, 16",
          icon: "phone",
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
      ],
    },
  ],
};

module.exports = {
  data: {
    baseUrl,
    maps: [
      {
        title: {
          left: "Sede",
          right: "Poppi",
        },
        subtitle: "servizi ecologici",
        src: "https://maps.google.com/maps?q=Maggi%20Mariano%20Servizi%20Ecologici%20srl%2C%20Via%20Aretina%2C%2016%2C%2052014%20Poppi%20AR&t=m&z=14&output=embed&iwloc=near",
      },
      {
        title: {
          left: "Sede",
          right: "Arezzo",
        },
        subtitle: "autospurgo aretino",
        src: "https://maps.google.com/maps?q=Maggi%20Mariano%20Servizi%20Ecologici%20srl%2C%20Via%20Aretina%2C%2016%2C%2052014%20Poppi%20AR&t=m&z=14&output=embed&iwloc=near",
      },
    ],
    footer: footerData,
    topNavBar: topNavBarData,
    mainTitle: mainTitleData,
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
      height: 64,
    },
    title: "Maggi Mariano",
    logoSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi.png",
  },
  links,
};
