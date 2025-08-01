function makeLinks(defaultLinks, data, prefix) {
  const out = { ...defaultLinks };
  for (const dataElement of data) {
    out[dataElement.path] = `${prefix}-${dataElement.path}`;
  }
  return out;
}

function makeNavBarItems(data, prefix, links, additionalItems = {}) {
  const out = {};
  for (const dataElement of data) {
    out[`${prefix} ${dataElement.title}`] = links[dataElement.path];
  }
  return { ...out, ...additionalItems };
}

const { default: Link } = require("next/link");

const province = require("./.data/province.json");
const comuniArezzo = require("./.data/comuni/arezzo.json");
const comuniFirenze = require("./.data/comuni/firenze.json");
const comuniPerugia = require("./.data/comuni/perugia.json");

const baseUrl = "https://www.maggi-mariano.it";
const allLocations = [
  ...province,
  ...comuniArezzo,
  ...comuniFirenze,
  ...comuniPerugia,
];

const links = {
  autospurgo: makeLinks(
    {
      root: "/autospurgo",
    },
    allLocations,
    "/autospurgo/autospurgo"
  ),
  contatti: "/contatti",
  "documenti-e-autorizzazioni": "/documenti-e-autorizzazioni",
  servizi: {
    "centrifugazione-o-disidratazione-fanghi":
      "/servizi/centrifugazione-o-disidratazione-fanghi",
    "escavatore-a-risucchio": "/servizi/escavatore-a-risucchio",
    "frantoio-mobile-inerti": makeLinks(
      {
        root: "/servizi/frantoio-mobile-inerti",
      },
      allLocations,
      "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti"
    ),
    "noleggio-bagni-chimici": makeLinks(
      {
        root: "/servizi/noleggio-bagni-chimici",
      },
      allLocations,
      "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici"
    ),
    "noleggio-container-e-cassoni": "/servizi/noleggio-container-e-cassoni",
    "pulizia-fognature": makeLinks(
      {
        root: "/servizi/pulizia-fognature",
      },
      allLocations,
      "/servizi/pulizia-fognature/pulizia-fognature"
    ),
    "recupero-materiali-ferrosi": "/servizi/recupero-materiali-ferrosi",
    "spurgo-pozzi-neri": makeLinks(
      {
        root: "/servizi/spurgo-pozzi-neri",
      },
      allLocations,
      "/servizi/spurgo-pozzi-neri/spurgo-pozzi-neri"
    ),
    "spurgo-fosse-biologiche": makeLinks(
      {
        root: "/servizi/spurgo-fosse-biologiche",
      },
      allLocations,
      "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche"
    ),
    "trasporto-acqua": makeLinks(
      {
        root: "/servizi/trasporto-acqua",
      },
      allLocations,
      "/servizi/trasporto-acqua/trasporto-acqua"
    ),
    "trasporto-rifiuti": makeLinks(
      {
        root: "/servizi/trasporto-rifiuti",
      },
      allLocations,
      "/servizi/trasporto-rifiuti/trasporto-rifiuti"
    ),
    "videoispezioni-telecamera-robot":
      "/servizi/videoispezioni-con-telecamera-robot",
  },
  videogallery: "/videogallery",
  privacy: {
    "privacy-policy": "/privacy/privacy-policy",
    "cookie-policy": "/privacy/cookie-policy",
  },
};

const navBarSections = {
  Home: "/",
  Autospurgo: makeNavBarItems(province, "Autospurgo", links.autospurgo, {
    "Autospurgo Arezzo": makeNavBarItems(
      comuniArezzo,
      "Autospurgo",
      links.autospurgo
    ),
    "Autospurgo Firenze": makeNavBarItems(
      comuniFirenze,
      "Autospurgo",
      links.autospurgo
    ),
    "Autospurgo Perugia": makeNavBarItems(
      comuniPerugia,
      "Autospurgo",
      links.autospurgo
    ),
  }),
  Servizi: {
    "Frantoio mobile inerti": makeNavBarItems(
      province,
      "Frantoio mobile inerti",
      links.servizi["frantoio-mobile-inerti"],
      {
        "Frantoio mobile inerti Arezzo": makeNavBarItems(
          comuniArezzo,
          "Frantoio mobile inerti",
          links.servizi["frantoio-mobile-inerti"]
        ),
        "Frantoio mobile inerti Firenze": makeNavBarItems(
          comuniFirenze,
          "Frantoio mobile inerti",
          links.servizi["frantoio-mobile-inerti"]
        ),
        "Frantoio mobile inerti Perugia": makeNavBarItems(
          comuniPerugia,
          "Frantoio mobile inerti",
          links.servizi["frantoio-mobile-inerti"]
        ),
      }
    ),
    "Centrifugazione o disidratazione fanghi":
      links.servizi["centrifugazione-o-disidratazione-fanghi"],
    "Escavatore a risucchio": links.servizi["escavatore-a-risucchio"],
    "Noleggio bagni chimici": makeNavBarItems(
      province,
      "Noleggio bagni chimici",
      links.servizi["noleggio-bagni-chimici"],
      {
        "Noleggio bagni chimici Arezzo": makeNavBarItems(
          comuniArezzo,
          "Noleggio bagni chimici",
          links.servizi["noleggio-bagni-chimici"]
        ),
        "Noleggio bagni chimici Firenze": makeNavBarItems(
          comuniFirenze,
          "Noleggio bagni chimici",
          links.servizi["noleggio-bagni-chimici"]
        ),
        "Noleggio bagni chimici Perugia": makeNavBarItems(
          comuniPerugia,
          "Noleggio bagni chimici",
          links.servizi["noleggio-bagni-chimici"]
        ),
      }
    ),
    "Noleggio container e cassoni":
      links.servizi["noleggio-container-e-cassoni"],
    "Pulizia fognature": makeNavBarItems(
      province,
      "Pulizia fognature",
      links.servizi["pulizia-fognature"],
      {
        "Pulizia fognature Arezzo": makeNavBarItems(
          comuniArezzo,
          "Pulizia fognature",
          links.servizi["pulizia-fognature"]
        ),
        "Pulizia fognature Firenze": makeNavBarItems(
          comuniFirenze,
          "Pulizia fognature",
          links.servizi["pulizia-fognature"]
        ),
        "Pulizia fognature Perugia": makeNavBarItems(
          comuniPerugia,
          "Pulizia fognature",
          links.servizi["pulizia-fognature"]
        ),
      }
    ),
    "Recupero materiali ferrosi": links.servizi["recupero-materiali-ferrosi"],
    "Spurgo fosse biologiche": makeNavBarItems(
      province,
      "Spurgo fosse biologiche",
      links.servizi["spurgo-fosse-biologiche"],
      {
        "Spurgo fosse biologiche Arezzo": makeNavBarItems(
          comuniArezzo,
          "Spurgo fosse biologiche",
          links.servizi["spurgo-fosse-biologiche"]
        ),
        "Spurgo fosse biologiche Firenze": makeNavBarItems(
          comuniFirenze,
          "Spurgo fosse biologiche",
          links.servizi["spurgo-fosse-biologiche"]
        ),
        "Spurgo fosse biologiche Perugia": makeNavBarItems(
          comuniPerugia,
          "Spurgo fosse biologiche",
          links.servizi["spurgo-fosse-biologiche"]
        ),
      }
    ),
    "Spurgo pozzi neri": makeNavBarItems(
      province,
      "Spurgo pozzi neri",
      links.servizi["spurgo-pozzi-neri"],
      {
        "Spurgo pozzi neri Arezzo": makeNavBarItems(
          comuniArezzo,
          "Spurgo pozzi neri",
          links.servizi["spurgo-pozzi-neri"]
        ),
        "Spurgo pozzi neri Firenze": makeNavBarItems(
          comuniFirenze,
          "Spurgo pozzi neri",
          links.servizi["spurgo-pozzi-neri"]
        ),
        "Spurgo pozzi neri Perugia": makeNavBarItems(
          comuniPerugia,
          "Spurgo pozzi neri",
          links.servizi["spurgo-pozzi-neri"]
        ),
      }
    ),
    "Trasporto acqua": makeNavBarItems(
      province,
      "Trasporto acqua",
      links.servizi["trasporto-acqua"],
      {
        "Trasporto acqua Arezzo": makeNavBarItems(
          comuniArezzo,
          "Trasporto acqua",
          links.servizi["trasporto-acqua"]
        ),
        "Trasporto acqua Firenze": makeNavBarItems(
          comuniFirenze,
          "Trasporto acqua",
          links.servizi["trasporto-acqua"]
        ),
        "Trasporto acqua Perugia": makeNavBarItems(
          comuniPerugia,
          "Trasporto acqua",
          links.servizi["trasporto-acqua"]
        ),
      }
    ),
    "Trasporto rifiuti": makeNavBarItems(
      province,
      "Trasporto rifiuti",
      links.servizi["trasporto-rifiuti"],
      {
        "Trasporto rifiuti Arezzo": makeNavBarItems(
          comuniArezzo,
          "Trasporto rifiuti",
          links.servizi["trasporto-rifiuti"]
        ),
        "Trasporto rifiuti Firenze": makeNavBarItems(
          comuniFirenze,
          "Trasporto rifiuti",
          links.servizi["trasporto-rifiuti"]
        ),
        "Trasporto rifiuti Perugia": makeNavBarItems(
          comuniPerugia,
          "Trasporto rifiuti",
          links.servizi["trasporto-rifiuti"]
        ),
      }
    ),
    "Videoispezioni con telecamera robot":
      links.servizi["videoispezioni-telecamera-robot"],
  },
  Documenti: links["documenti-e-autorizzazioni"],
  Videogallery: links.videogallery,
  Contatti: links.contatti,
};

const mainTitleData = {
  title: "servizi ecologici",
  preTitle: "Maggi Mariano",
  subtitle:
    "Da sempre al fianco di aziende e cittadini per la salvaguardia dell'ambiente",
  imageSrc: "https://www.maggi-mariano.it/immagini/misc/ecologia.jpg",
  button: {
    href: links.contatti,
    label: "Per info o preventivi contattaci",
  },
};

const servicesNavGridData = [
  {
    id: "service-1",
    title: "Recupero",
    subtitle: "Materiali ferrosi",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/recupero-materiali-ferrosi.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/recupero-materiali-ferrosi.png`,
      },
    ],
    href: links.servizi["recupero-materiali-ferrosi"],
  },
  {
    id: "service-2",
    title: "Spurgo",
    subtitle: "Fosse biologiche",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/spurgo-fosse-biologiche.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/spurgo-fosse-biologiche.png`,
      },
    ],
    href: links.servizi["spurgo-fosse-biologiche"].root,
  },
  {
    id: "service-3",
    title: "Noleggio",
    subtitle: "Bagni chimici",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/noleggio-bagni.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/noleggio-bagni.png`,
      },
    ],
    href: links.servizi["noleggio-bagni-chimici"].root,
  },
  {
    id: "service-4",
    title: "Trasporto",
    subtitle: "Acqua potabile",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/trasporto-acqua-potabile.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/trasporto-acqua-potabile.png`,
      },
    ],
    href: links.servizi["trasporto-acqua"].root,
  },
  {
    id: "service-5",
    title: "Videoispezioni",
    subtitle: "con telecamera robot",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/videoispezioni-telecamera-robot.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/videoispezioni-telecamera-robot.png`,
      },
    ],
    href: links.servizi["videoispezioni-telecamera-robot"],
  },
  {
    id: "service-6",
    title: "Noleggio",
    subtitle: "container e cassoni",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/noleggio-container-cassoni.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/noleggio-container-cassoni.png`,
      },
    ],
    href: links.servizi["noleggio-container-e-cassoni"],
  },
  {
    id: "service-7",
    title: "Escavatore",
    subtitle: "a risucchio",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/escavatore-risucchio.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/escavatore-risucchio.png`,
      },
    ],
    href: links.servizi["escavatore-a-risucchio"],
  },
  {
    id: "service-8",
    title: "Trasporto",
    subtitle: "rifiuti",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/trasporto-rifiuti.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/trasporto-rifiuti.png`,
      },
    ],
    href: links.servizi["trasporto-rifiuti"].root,
  },
  {
    id: "service-9",
    title: "Container",
    subtitle: "rifiuti speciali",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/container-rifiuti-speciali.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/container-rifiuti-speciali.png`,
      },
    ],
    href: links.servizi["noleggio-container-e-cassoni"],
  },
  {
    id: "service-10",
    title: "Centrifugazione",
    subtitle: "fanghi",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/centrifugazione-fanghi.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/centrifugazione-fanghi.png`,
      },
    ],
    href: links.servizi["centrifugazione-o-disidratazione-fanghi"],
  },
  {
    id: "service-11",
    title: "Frantoio mobile",
    subtitle: "inerti",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/frantoio-mobile-inerti.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/frantoio-mobile-inerti.png`,
      },
    ],
    href: links.servizi["frantoio-mobile-inerti"].root,
  },
  {
    id: "service-12",
    title: "Spurgo",
    subtitle: "fognature",
    iconSources: [
      {
        type: "image/webp",
        srcset: `${baseUrl}/immagini/servizi/spurgo-fognature.webp`,
      },
      {
        type: "image/png",
        srcset: `${baseUrl}/immagini/servizi/spurgo-fognature.png`,
      },
    ],
    href: links.servizi["pulizia-fognature"].root,
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
      icon: "envelope",
    },
    {
      title: "Rifiuti Liquidi",
      link: {
        href: "tel:+393343889878",
        label: "Cell.: +39 334 3889878",
      },
      icon: "mobile-phone",
    },
    {
      title: "Rifiuti Solidi",
      link: {
        href: "tel:+393351377089",
        label: "Cell.: +39 335 1377089",
      },
      icon: "mobile-phone",
    },
  ],
};

const footerData = {
  logo: {
    src: "https://www.maggi-mariano.it/immagini/misc/img0001.png",
    alt: "Maggi Mariano",
    dimensions: { width: 175, height: 90 },
  },
  sections: [
    {
      title: "Servizi Ecologici",
      navItems: [
        {
          title: "Sede Poppi",
          icon: "map",
          link: {
            label: "Via Aretina 16, Ponte a Poppi (AR)",
            href: "https://www.google.com/maps?ll=43.723087,11.773815&z=14&t=m&hl=it&gl=US&mapclient=embed&cid=17598602611377354892",
            target: "_blank",
          },
        },
        {
          title: "Sede Arezzo",
          icon: "map",
          link: {
            label: "Loc. San Giuliano, Arezzo (AR)",
            href: "https://www.google.com/maps?ll=43.453014,11.807869&z=14&t=m&hl=it&gl=US&mapclient=embed&cid=13949104776833428429",
            target: "_blank",
          },
        },
        {
          title: "P. IVA e C.F.",
          icon: "pencil",
          link: {
            label: "01731060511",
            href: baseUrl,
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
            href: "tel:+390575520447",
          },
        },
        {
          title: "Rifiuti liquidi",
          icon: "mobile-phone",
          link: {
            label: "+39 334 3889878",
            href: "tel: +393343889878",
          },
        },
        {
          title: "Rifiuti solidi",
          icon: "mobile-phone",
          link: {
            label: "+39 335 1377089",
            href: "tel:+393351377089",
          },
        },
        {
          title: "Fax",
          icon: "phone",
          link: {
            label: "+39 0575 527949",
            href: "tel:+390575527949",
          },
        },
        {
          title: "Email",
          icon: "envelope",
          link: {
            label: "serviziecologici@maggimariano.it",
            href: "mailto:serviziecologici@maggimariano.it",
          },
        },
      ],
    },
    {
      title: "Servizi",
      navItems: [
        {
          title: "Autospurgo",
          icon: "trash",
          link: {
            label: "impianti e fognature",
            href: links.autospurgo.root,
          },
        },
        {
          title: "Frantoio mobile",
          icon: "truck",
          link: {
            label: "Frantoio mobile inerti",
            href: links.servizi["frantoio-mobile-inerti"].root,
          },
        },
        {
          title: "Noleggio bagni chimici",
          icon: "beaker",
          link: {
            label: "Noleggio bagni chimici",
            href: links.servizi["noleggio-bagni-chimici"].root,
          },
        },
        {
          title: "Trasporto acqua",
          icon: "truck",
          link: {
            label: "Trasporto acqua",
            href: links.servizi["trasporto-acqua"].root,
          },
        },
        {
          title: "Trasporto rifiuti",
          icon: "truck",
          link: {
            label: "Trasporto rifiuti",
            href: links.servizi["trasporto-rifiuti"].root,
          },
        },
      ],
    },
  ],
};

module.exports = {
  data: {
    baseUrl,
    privacy: {
      title: "Impostazioni privacy",
      subtitle: "Maggi Mariano Servizi Ecologici",
      sections: [
        {
          title: "Uso dei cookie & Web Storage API",
          paragraphs: [
            "I siti Web possono memorizzare o recuperare informazioni sotto forma di cookie e/o dati nelle API di storage del browser. Questi dati possono essere relativi ad informazioni statistiche anonime, valori associati a terze parti, informazioni sull'utente, le tue preferenze o dispositivi utilizzati per consentire un'esperienza web personalizzata o per migliorare l'esperienza di utilizzo del sito.",
            /*<span>
              Ti invitiamo a consultare la nostra{" "}
              <Link
                target="_blank"
                href={links.privacy["privacy-policy"]}
                className="underline text-blue-600"
              >
                privacy policy a questo link
              </Link>
              .
            </span>,*/
          ],
        },
      ],
      settings: [
        {
          id: "essential_cookies",
          name: "Dati essenziali",
          description:
            "Questi dati, memorizzati nella local storage API del tuo browser, sono strettamente necessari e devono essere sempre attivati per garantire le funzionalità di base del sito e memorizzare le tue preferenze.",
          disabled: true,
          default: "accepted",
        },
        {
          id: "third_party_cookies",
          name: "Cookie di terze parti",
          description:
            "Questo sito può consentire ad entità terze (e.g. Google) di memorizzare nel tuo browser dei cookie. Se disabilitati, alcune funzionalità (ad esempio le mappe di Google Maps e i video di Youtube) non saranno disponibili.",
        },
      ],
    },
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
        src: "https://maps.google.com/maps?q=Autospurgo%20Aretino%20Maggi%20Mariano%2C%20SS679%2C%2052100%20Arezzo%20AR&t=m&z=14&output=embed&iwloc=near",
      },
    ],
    footer: footerData,
    topNavBar: topNavBarData,
    mainTitle: mainTitleData,
    header: {
      navBarSections,
      logo: {
        src: "https://www.maggi-mariano.it/immagini/logo.png",
        alt: "Maggi Mariano",
      },
    },
    servicesGrid: {
      data: servicesNavGridData,
      decorationImageUrl:
        "https://www.maggi-mariano.it/immagini/misc/round-1.png",
      backgroundImageUrl:
        "https://www.maggi-mariano.it/immagini/misc/plant-growing-hand-green-nature-with-sunlight-eco-environment-concept_34152-2232-1.webp",
    },
  },
  misc: {
    mobileViewportThresholdPx: 768,
    logoDimensions: {
      width: 175,
      height: 64,
    },
    url: "www.maggi-mariano.it",
    title: "Maggi Mariano",
    extendedTitle: "Maggi Mariano Servizi Ecologici",
    email: "serviziecologici@maggimariano.it",
    iconSrc: "https://www.maggi-mariano.it/immagini/misc/favico-150x150.png",
    logoSrc: `${baseUrl}/immagini/logo.png`,
    googleAnalyticsId: "G-H3DK0QSQQV",
  },
  server: {
    mail: {
      host: "smtps.aruba.it",
      port: 465,
      secure: true,
      auth: {
        user: "postmaster@maggi-mariano.it",
        pass: "Mariano1960!!",
      },
      senderMail: "postmaster@maggi-mariano.it",
      adminMails: ["samuele.tamburi@gmail.com", "info@italwebcom.it"],
    },
  },
  links,
};
