const baseUrl = "https://www.maggi-mariano.it";

const links = {
  autospurgo: {
    root: "/autospurgo",
    anghiari: "/autospurgo/autospurgo-anghiari",
    arezzo: "/autospurgo/autospurgo-arezzo",
    "badia-prataglia": "/autospurgo/autospurgo-badia-prataglia",
    "badia-tedalda": "/autospurgo/autospurgo-badia-tedalda",
    bibbiena: "/autospurgo/autospurgo-bibbiena",
    bucine: "/autospurgo/autospurgo-bucine",
    camucia: "/autospurgo/autospurgo-camucia",
    capolona: "/autospurgo/autospurgo-capolona",
    "caprese-michelangelo": "/autospurgo/autospurgo-caprese-michelangelo",
    "castel-focognano": "/autospurgo/autospurgo-castel-focognano",
    "castel-san-niccolo": "/autospurgo/autospurgo-castel-san-niccolo",
    "castelfranco-piandisco": "/autospurgo/autospurgo-castelfranco-piandisco",
    "castiglion-fibocchi": "/autospurgo/autospurgo-castiglion-fibocchi",
    "castiglion-fiorentino": "/autospurgo/autospurgo-castiglion-fiorentino",
    cavriglia: "/autospurgo/autospurgo-cavriglia",
    "cesa-in-valdichiana": "/autospurgo/autospurgo-cesa-in-valdichiana",
    chitignano: "/autospurgo/autospurgo-chitignano",
    "chiusi-della-verna": "/autospurgo/autospurgo-chiusi-della-verna",
    "civitella-in-valdichiana":
      "/autospurgo/autospurgo-civitella-in-valdichiana",
    cortona: "/autospurgo/autospurgo-cortona",
    "foiano-della-chiana": "/autospurgo/autospurgo-foiano-della-chiana",
    laterina: "/autospurgo/autospurgo-laterina",
    "loro-ciuffenna": "/autospurgo/autospurgo-loro-ciuffenna",
    lucignano: "/autospurgo/autospurgo-lucignano",
    "marciano-della-chiana": "/autospurgo/autospurgo-marciano-della-chiana",
    "monte-san-savino": "/autospurgo/autospurgo-monte-san-savino",
    montemignaio: "/autospurgo/autospurgo-montemignaio",
    monterchi: "/autospurgo/autospurgo-monterchi",
    montevarchi: "/autospurgo/autospurgo-montevarchi",
    "ortignano-raggiolo": "/autospurgo/autospurgo-ortignano-raggiolo",
    "pergine-valdarno": "/autospurgo/autospurgo-pergine-valdarno",
    "pieve-al-toppo": "/autospurgo/autospurgo-pieve-al-toppo",
    "pieve-santo-stefano": "/autospurgo/autospurgo-pieve-santo-stefano",
    poppi: "/autospurgo/autospurgo-poppi",
    "pratovecchio-stia": "/autospurgo/autospurgo-pratovecchio-stia",
    rassina: "/autospurgo/autospurgo-rassina",
    rigutino: "/autospurgo/autospurgo-rigutino",
    "san-giovanni-valdarno": "/autospurgo/autospurgo-san-giovanni-valdarno",
    sansepolcro: "/autospurgo/autospurgo-sansepolcro",
    sestino: "/autospurgo/autospurgo-sestino",
    soci: "/autospurgo/autospurgo-soci",
    subbiano: "/autospurgo/autospurgo-subbiano",
    talla: "/autospurgo/autospurgo-talla",
    "terranuova-bracciolini": "/autospurgo/autospurgo-terranuova-bracciolini",
  },
  servizi: {
    "centrifugazione-o-disidratazione-fanghi":
      "/servizi/centrifugazione-o-disidratazione-fanghi",
    "escavatore-a-risucchio": "/servizi/escavatore-a-risucchio",
    "noleggio-bagni-chimici": {
      root: "/servizi/noleggio-bagni-chimici",
      anghiari:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-anghiari",
      arezzo: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-arezzo",
      "badia-tedalda":
        "/noleggio-bagni-chimici/servizi/noleggio-bagni-chimici-badia-tedalda",
      bibbiena:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-bibbiena",
      bucine: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-bucine",
      capolona:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-capolona",
      "caprese-michelangelo":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-caprese-michelangelo",
      "castel-focognano":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-castel-focognano",
      "castel-san-niccolo":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-castel-san-niccolo",
      "castelfranco-piandisco":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-castelfranco-piandisco",
      "castiglion-fibocchi":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-castiglion-fibocchi",
      "castiglion-fiorentino":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-castiglion-fiorentino",
      cavriglia:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-cavriglia",
      chitignano:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-chitignano",
    },
    "noleggio-container-e-cassoni": "/servizi/noleggio-container-e-cassoni",
    "pulizia-fognature": {
      root: "/servizi/pulizia-fognature",
      anghiari: "/servizi/pulizia-fognature/pulizia-fognature-anghiari",
      arezzo: "/servizi/pulizia-fognature/pulizia-fognature-arezzo",
      "badia-tedalda":
        "/pulizia-fognature/servizi/pulizia-fognature-badia-tedalda",
      bibbiena: "/servizi/pulizia-fognature/pulizia-fognature-bibbiena",
      bucine: "/servizi/pulizia-fognature/pulizia-fognature-bucine",
      capolona: "/servizi/pulizia-fognature/pulizia-fognature-capolona",
      "caprese-michelangelo":
        "/servizi/pulizia-fognature/pulizia-fognature-caprese-michelangelo",
      "castel-focognano":
        "/servizi/pulizia-fognature/pulizia-fognature-castel-focognano",
      "castel-san-niccolo":
        "/servizi/pulizia-fognature/pulizia-fognature-castel-san-niccolo",
      "castelfranco-piandisco":
        "/servizi/pulizia-fognature/pulizia-fognature-castelfranco-piandisco",
      "castiglion-fibocchi":
        "/servizi/pulizia-fognature/pulizia-fognature-castiglion-fibocchi",
      "castiglion-fiorentino":
        "/servizi/pulizia-fognature/pulizia-fognature-castiglion-fiorentino",
      cavriglia: "/servizi/pulizia-fognature/pulizia-fognature-cavriglia",
      chitignano: "/servizi/pulizia-fognature/pulizia-fognature-chitignano",
    },
  },
};

const navBarSections = {
  Home: baseUrl,
  Autospurgo: {
    "Autospurgo Anghiari": links.autospurgo.anghiari,
    "Autospurgo Arezzo": links.autospurgo.arezzo,
    "Autospurgo Badia Prataglia": links.autospurgo["badia-prataglia"],
    "Autospurgo Badia Tedalda": links.autospurgo["badia-tedalda"],
    "Autospurgo Bibbiena": links.autospurgo.bibbiena,
    "Autospurgo Bucine": links.autospurgo.bucine,
    "Autospurgo Camucia": links.autospurgo.camucia,
    "Autospurgo Capolona": links.autospurgo.capolona,
    "Autospurgo Caprese Michelangelo": links.autospurgo["caprese-michelangelo"],
    "Autospurgo Castel Focognano": links.autospurgo["castel-focognano"],
    "Autospurgo Castel San Niccolò": links.autospurgo["castel-san-niccolo"],
    "Autospurgo Castelfranco Piandiscò":
      links.autospurgo["castelfranco-piandisco"],
    "Autospurgo Castiglion Fibocchi": links.autospurgo["castiglion-fibocchi"],
    "Autospurgo Castiglion Fiorentino":
      links.autospurgo["castiglion-fiorentino"],
    "Autospurgo Cavriglia": links.autospurgo.cavriglia,
    "Autospurgo Cesa in Valdichiana": links.autospurgo["cesa-in-valdichiana"],
    "Autospurgo Chitignano": links.autospurgo.chitignano,
    "Autospurgo Chiusi della Verna": links.autospurgo["chiusi-della-verna"],
    "Autospurgo Civitella in Valdichiana":
      links.autospurgo["civitella-in-valdichiana"],
    "Autospurgo Cortona": links.autospurgo.cortona,
    "Autospurgo Foiano della Chiana": links.autospurgo["foiano-della-chiana"],
    "Autospurgo Laterina": links.autospurgo.laterina,
    "Autospurgo Loro Ciuffenna": links.autospurgo["loro-ciuffenna"],
    "Autospurgo Lucignano": links.autospurgo.lucignano,
    "Autospurgo Marciano della Chiana":
      links.autospurgo["marciano-della-chiana"],
    "Autospurgo Monte San Savino": links.autospurgo["monte-san-savino"],
    "Autospurgo Montemignaio": links.autospurgo.montemignaio,
    "Autospurgo Monterchi": links.autospurgo.monterchi,
    "Autospurgo Montevarchi": links.autospurgo.montevarchi,
    "Autospurgo Ortignano Raggiolo": links.autospurgo["ortignano-raggiolo"],
    "Autospurgo Pergine Valdarno": links.autospurgo["pergine-valdarno"],
    "Autospurgo Pieve al Toppo": links.autospurgo["pieve-al-toppo"],
    "Autospurgo Pieve Santo Stefano": links.autospurgo["pieve-santo-stefano"],
    "Autospurgo Poppi": links.autospurgo.poppi,
    "Autospurgo Pratovecchio Stia": links.autospurgo["pratovecchio-stia"],
    "Autospurgo Rassina": links.autospurgo.rassina,
    "Autospurgo Rigutino": links.autospurgo.rigutino,
    "Autospurgo San Giovanni Valdarno":
      links.autospurgo["san-giovanni-valdarno"],
    "Autospurgo Sansepolcro": links.autospurgo["sansepolcro"],
    "Autospurgo Sestino": links.autospurgo["sestino"],
    "Autospurgo Soci": links.autospurgo["soci"],
    "Autospurgo Subbiano": links.autospurgo["subbiano"],
    "Autospurgo Talla": links.autospurgo["talla"],
    "Autospurgo Terranuova Bracciolini":
      links.autospurgo["terranuova-bracciolini"],
  },
  Servizi: {
    "Frantoio mobile inerti": {
      "Frantoio mobile inerti Siena":
        "https://www.maggi-mariano.it/frantoio-mobile-inerti/frantoio-mobile-inerti-siena/",
      "Frantoio mobile inerti Arezzo":
        "https://www.maggi-mariano.it/frantoio-mobile-inerti/frantoio-mobile-inerti-arezzo/",
    },
    "Centrifugazione o disidratazione fanghi":
      links.servizi["centrifugazione-o-disidratazione-fanghi"],
    "Escavatore a risucchio": links.servizi["escavatore-a-risucchio"],
    "Noleggio bagni chimici": {
      "Noleggio bagni chimici Anghiari":
        links.servizi["noleggio-bagni-chimici"].anghiari,
      "Noleggio bagni chimici Arezzo":
        links.servizi["noleggio-bagni-chimici"].arezzo,
      "Noleggio bagni chimici Badia Tedalda":
        links.servizi["noleggio-bagni-chimici"]["badia-tedalda"],
      "Noleggio bagni chimici Bibbiena":
        links.servizi["noleggio-bagni-chimici"].bibbiena,
      "Noleggio bagni chimici Bucine":
        links.servizi["noleggio-bagni-chimici"].bucine,
      "Noleggio bagni chimici Capolona":
        links.servizi["noleggio-bagni-chimici"].capolona,
      "Noleggio bagni chimici Caprese Michelangelo":
        links.servizi["noleggio-bagni-chimici"]["caprese-michelangelo"],
      "Noleggio bagni chimici Castel Focognano":
        links.servizi["noleggio-bagni-chimici"]["castel-focognano"],
      "Noleggio bagni chimici Castel Niccolò":
        links.servizi["noleggio-bagni-chimici"]["castel-san-niccolo"],
      "Noleggio bagni chimici Castelfranco Piandiscò":
        links.servizi["noleggio-bagni-chimici"]["castelfranco-piandisco"],
      "Noleggio bagni chimici Castiglion Fibocchi":
        links.servizi["noleggio-bagni-chimici"]["castiglion-fibocchi"],
      "Noleggio bagni chimici Castiglion Fiorentino":
        links.servizi["noleggio-bagni-chimici"]["castiglion-fiorentino"],
      "Noleggio bagni chimici Cavriglia":
        links.servizi["noleggio-bagni-chimici"].cavriglia,
      "Noleggio bagni chimici Chitignano":
        links.servizi["noleggio-bagni-chimici"].chitignano,
    },
    "Noleggio container e cassoni":
      links.servizi["noleggio-container-e-cassoni"],
    "Pulizia fognature": {
      "Pulizia fognature Anghiari": links.servizi["pulizia-fognature"].anghiari,
      "Pulizia fognature Arezzo": links.servizi["pulizia-fognature"].arezzo,
      "Pulizia fognature Badia Tedalda":
        links.servizi["pulizia-fognature"]["badia-tedalda"],
      "Pulizia fognature Bibbiena": links.servizi["pulizia-fognature"].bibbiena,
      "Pulizia fognature Bucine": links.servizi["pulizia-fognature"].bucine,
      "Pulizia fognature Capolona": links.servizi["pulizia-fognature"].capolona,
      "Pulizia fognature Caprese Michelangelo":
        links.servizi["pulizia-fognature"]["caprese-michelangelo"],
      "Pulizia fognature Castel Focognano":
        links.servizi["pulizia-fognature"]["castel-focognano"],
      "Pulizia fognature Castel Niccolò":
        links.servizi["pulizia-fognature"]["castel-san-niccolo"],
      "Pulizia fognature Castelfranco Piandiscò":
        links.servizi["pulizia-fognature"]["castelfranco-piandisco"],
      "Pulizia fognature Castiglion Fibocchi":
        links.servizi["pulizia-fognature"]["castiglion-fibocchi"],
      "Pulizia fognature Castiglion Fiorentino":
        links.servizi["pulizia-fognature"]["castiglion-fiorentino"],
      "Pulizia fognature Cavriglia":
        links.servizi["pulizia-fognature"].cavriglia,
      "Pulizia fognature Chitignano":
        links.servizi["pulizia-fognature"].chitignano,
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
