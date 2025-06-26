const { default: Link } = require("next/link");

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
    "figline-valdarno": "/autospurgo/autospurgo-figline-valdarno",
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
  contatti: "/contatti",
  "documenti-e-autorizzazioni": "/documenti-e-autorizzazioni",
  servizi: {
    "centrifugazione-o-disidratazione-fanghi":
      "/servizi/centrifugazione-o-disidratazione-fanghi",
    "escavatore-a-risucchio": "/servizi/escavatore-a-risucchio",
    "frantoio-mobile-inerti": {
      root: "/servizi/frantoio-mobile-inerti",
      arezzo: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-arezzo",
      firenze: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-firenze",
      grosseto:
        "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-grosseto",
      livorno: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-livorno",
      lucca: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-lucca",
      "massa-carrara":
        "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-massa-carrara",
      pisa: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-pisa",
      pistoia: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-pistoia",
      prato: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-prato",
      siena: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-siena",
    },
    "noleggio-bagni-chimici": {
      root: "/servizi/noleggio-bagni-chimici",
      anghiari:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-anghiari",
      arezzo: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-arezzo",
      "badia-tedalda":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-badia-tedalda",
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
      "chiusi-della-verna":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-chiusi-della-verna",
      "civitella-in-valdichiana":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-civitella-in-valdichiana",
      cortona: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-cortona",
      "figline-valdarno":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-figline-valdarno",
      "foiano-della-chiana":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-foiano-della-chiana",
      laterina:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-laterina",
      "loro-ciuffenna":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-loro-ciuffenna",
      lucignano:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-lucignano",
      "marciano-della-chiana":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-marciano-della-chiana",
      "monte-san-savino":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-monte-san-savino",
      montemignaio:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-montemignaio",
      monterchi:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-monterchi",
      montevarchi:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-montevarchi",
      "ortignano-raggiolo":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-ortignano-raggiolo",
      "pergine-valdarno":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-pergine-valdarno",
      "pieve-al-toppo":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-pieve-al-toppo",
      "pieve-santo-stefano":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-pieve-santo-stefano",
      poppi: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-poppi",
      "pratovecchio-stia":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-pratovecchio-stia",
      rassina: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-rassina",
      rigutino:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-rigutino",
      "san-giovanni-valdarno":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-san-giovanni-valdarno",
      sansepolcro:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-sansepolcro",
      sestino: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-sestino",
      soci: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-soci",
      subbiano:
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-subbiano",
      talla: "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-talla",
      "terranuova-bracciolini":
        "/servizi/noleggio-bagni-chimici/noleggio-bagni-chimici-terranuova-bracciolini",
    },
    "noleggio-container-e-cassoni": "/servizi/noleggio-container-e-cassoni",
    "pulizia-fognature": {
      root: "/servizi/pulizia-fognature",
      anghiari: "/servizi/pulizia-fognature/pulizia-fognature-anghiari",
      arezzo: "/servizi/pulizia-fognature/pulizia-fognature-arezzo",
      "badia-tedalda":
        "/servizi/pulizia-fognature/pulizia-fognature-badia-tedalda",
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
      "chiusi-della-verna":
        "/servizi/pulizia-fognature/pulizia-fognature-chiusi-della-verna",
      "civitella-in-valdichiana":
        "/servizi/pulizia-fognature/pulizia-fognature-civitella-in-valdichiana",
      cortona: "/pulizia-fognature/servizi/pulizia-fognature-cortona",
      "figline-valdarno":
        "/servizi/pulizia-fognature/pulizia-fognature-figline-valdarno",
      "foiano-della-chiana":
        "/servizi/pulizia-fognature/pulizia-fognature-foiano-della-chiana",
      laterina: "/servizi/pulizia-fognature/pulizia-fognature-laterina",
      "loro-ciuffenna":
        "/servizi/pulizia-fognature/pulizia-fognature-loro-ciuffenna",
      lucignano: "/servizi/pulizia-fognature/pulizia-fognature-lucignano",
      "marciano-della-chiana":
        "/servizi/pulizia-fognature/pulizia-fognature-marciano-della-chiana",
      "monte-san-savino":
        "/servizi/pulizia-fognature/pulizia-fognature-monte-san-savino",
      montemignaio: "/servizi/pulizia-fognature/pulizia-fognature-montemignaio",
      monterchi: "/servizi/pulizia-fognature/pulizia-fognature-monterchi",
      montevarchi: "/servizi/pulizia-fognature/pulizia-fognature-montevarchi",
      "ortignano-raggiolo":
        "/servizi/pulizia-fognature/pulizia-fognature-ortignano-raggiolo",
      "pergine-valdarno":
        "/servizi/pulizia-fognature/pulizia-fognature-pergine-valdarno",
      "pieve-al-toppo":
        "/servizi/pulizia-fognature/pulizia-fognature-pieve-al-toppo",
      "pieve-santo-stefano":
        "/servizi/pulizia-fognature/pulizia-fognature-pieve-santo-stefano",
      poppi: "/servizi/pulizia-fognature/pulizia-fognature-poppi",
      "pratovecchio-stia":
        "/servizi/pulizia-fognature/pulizia-fognature-pratovecchio-stia",
      rassina: "/servizi/pulizia-fognature/pulizia-fognature-rassina",
      rigutino: "/servizi/pulizia-fognature/pulizia-fognature-rigutino",
      "san-giovanni-valdarno":
        "/servizi/pulizia-fognature/pulizia-fognature-san-giovanni-valdarno",
      sansepolcro: "/servizi/pulizia-fognature/pulizia-fognature-sansepolcro",
      sestino: "/servizi/pulizia-fognature/pulizia-fognature-sestino",
      soci: "/servizi/pulizia-fognature/pulizia-fognature-soci",
      subbiano: "/servizi/pulizia-fognature/pulizia-fognature-subbiano",
      talla: "/servizi/pulizia-fognature/pulizia-fognature-talla",
      "terranuova-bracciolini":
        "/servizi/pulizia-fognature/pulizia-fognature-terranuova-bracciolini",
    },
    "recupero-materiali-ferrosi": "/servizi/recupero-materiali-ferrosi",
    "spurgo-fosse-biologiche": {
      root: "/servizi/spurgo-fosse-biologiche",
      anghiari:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-anghiari",
      arezzo: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-arezzo",
      "badia-tedalda":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-badia-tedalda",
      bibbiena:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-bibbiena",
      bucine: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-bucine",
      capolona:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-capolona",
      "caprese-michelangelo":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-caprese-michelangelo",
      "castel-focognano":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-castel-focognano",
      "castel-san-niccolo":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-castel-san-niccolo",
      "castelfranco-piandisco":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-castelfranco-piandisco",
      "castiglion-fibocchi":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-castiglion-fibocchi",
      "castiglion-fiorentino":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-castiglion-fiorentino",
      cavriglia:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-cavriglia",
      chitignano:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-chitignano",
      "chiusi-della-verna":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-chiusi-della-verna",
      "civitella-in-valdichiana":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-civitella-in-valdichiana",
      cortona:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-cortona",
      "figline-valdarno":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-figline-valdarno",
      "foiano-della-chiana":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-foiano-della-chiana",
      laterina:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-laterina",
      "loro-ciuffenna":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-loro-ciuffenna",
      lucignano:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-lucignano",
      "marciano-della-chiana":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-marciano-della-chiana",
      "monte-san-savino":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-monte-san-savino",
      montemignaio:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-montemignaio",
      monterchi:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-monterchi",
      montevarchi:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-montevarchi",
      "ortignano-raggiolo":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-ortignano-raggiolo",
      "pergine-valdarno":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-pergine-valdarno",
      "pieve-al-toppo":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-pieve-al-toppo",
      "pieve-santo-stefano":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-pieve-santo-stefano",
      poppi: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-poppi",
      "pratovecchio-stia":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-pratovecchio-stia",
      rassina:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-rassina",
      rigutino:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-rigutino",
      "san-giovanni-valdarno":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-san-giovanni-valdarno",
      sansepolcro:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-sansepolcro",
      sestino:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-sestino",
      soci: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-soci",
      subbiano:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-subbiano",
      talla: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-talla",
      "terranuova-bracciolini":
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-terranuova-bracciolini",
    },
    "trasporto-acqua": {
      root: "/servizi/trasporto-acqua",
      anghiari: "/servizi/trasporto-acqua/trasporto-acqua-anghiari",
      arezzo: "/servizi/trasporto-acqua/trasporto-acqua-arezzo",
      "badia-tedalda": "/servizi/trasporto-acqua/trasporto-acqua-badia-tedalda",
      bibbiena: "/servizi/trasporto-acqua/trasporto-acqua-bibbiena",
      bucine: "/servizi/trasporto-acqua/trasporto-acqua-bucine",
      capolona: "/servizi/trasporto-acqua/trasporto-acqua-capolona",
      "caprese-michelangelo":
        "/servizi/trasporto-acqua/trasporto-acqua-caprese-michelangelo",
      "castel-focognano":
        "/servizi/trasporto-acqua/trasporto-acqua-castel-focognano",
      "castel-san-niccolo":
        "/servizi/trasporto-acqua/trasporto-acqua-castel-san-niccolo",
      "castelfranco-piandisco":
        "/servizi/trasporto-acqua/trasporto-acqua-castelfranco-piandisco",
      "castiglion-fibocchi":
        "/servizi/trasporto-acqua/trasporto-acqua-castiglion-fibocchi",
      "castiglion-fiorentino":
        "/servizi/trasporto-acqua/trasporto-acqua-castiglion-fiorentino",
      cavriglia: "/servizi/trasporto-acqua/trasporto-acqua-cavriglia",
      chitignano: "/servizi/trasporto-acqua/trasporto-acqua-chitignano",
      "chiusi-della-verna":
        "/servizi/trasporto-acqua/trasporto-acqua-chiusi-della-verna",
      "civitella-in-valdichiana":
        "/servizi/trasporto-acqua/trasporto-acqua-civitella-in-valdichiana",
      cortona: "/servizi/trasporto-acqua/trasporto-acqua-cortona",
      "figline-valdarno":
        "/servizi/trasporto-acqua/trasporto-acqua-figline-valdarno",
      "foiano-della-chiana":
        "/servizi/trasporto-acqua/trasporto-acqua-foiano-della-chiana",
      laterina: "/servizi/trasporto-acqua/trasporto-acqua-laterina",
      "loro-ciuffenna":
        "/servizi/trasporto-acqua/trasporto-acqua-loro-ciuffenna",
      lucignano: "/servizi/trasporto-acqua/trasporto-acqua-lucignano",
      "marciano-della-chiana":
        "/servizi/trasporto-acqua/trasporto-acqua-marciano-della-chiana",
      "monte-san-savino":
        "/servizi/trasporto-acqua/trasporto-acqua-monte-san-savino",
      montemignaio: "/servizi/trasporto-acqua/trasporto-acqua-montemignaio",
      monterchi: "/servizi/trasporto-acqua/trasporto-acqua-monterchi",
      montevarchi: "/servizi/trasporto-acqua/trasporto-acqua-montevarchi",
      "ortignano-raggiolo":
        "/servizi/trasporto-acqua/trasporto-acqua-ortignano-raggiolo",
      "pergine-valdarno":
        "/servizi/trasporto-acqua/trasporto-acqua-pergine-valdarno",
      "pieve-al-toppo":
        "/servizi/trasporto-acqua/trasporto-acqua-pieve-al-toppo",
      "pieve-santo-stefano":
        "/servizi/trasporto-acqua/trasporto-acqua-pieve-santo-stefano",
      poppi: "/servizi/trasporto-acqua/trasporto-acqua-poppi",
      "pratovecchio-stia":
        "/servizi/trasporto-acqua/trasporto-acqua-pratovecchio-stia",
      rassina: "/servizi/trasporto-acqua/trasporto-acqua-rassina",
      rigutino: "/servizi/trasporto-acqua/trasporto-acqua-rigutino",
      "san-giovanni-valdarno":
        "/servizi/trasporto-acqua/trasporto-acqua-san-giovanni-valdarno",
      sansepolcro: "/servizi/trasporto-acqua/trasporto-acqua-sansepolcro",
      sestino: "/servizi/trasporto-acqua/trasporto-acqua-sestino",
      soci: "/servizi/trasporto-acqua/trasporto-acqua-soci",
      subbiano: "/servizi/trasporto-acqua/trasporto-acqua-subbiano",
      talla: "/servizi/trasporto-acqua/trasporto-acqua-talla",
      "terranuova-bracciolini":
        "/servizi/trasporto-acqua/trasporto-acqua-terranuova-bracciolini",
    },
    "trasporto-rifiuti": {
      root: "/servizi/trasporto-rifiuti",
      anghiari: "/servizi/trasporto-rifiuti/trasporto-rifiuti-anghiari",
      arezzo: "/servizi/trasporto-rifiuti/trasporto-rifiuti-arezzo",
      "badia-tedalda":
        "/trasporto-rifiuti/servizi/trasporto-rifiuti-badia-tedalda",
      bibbiena: "/servizi/trasporto-rifiuti/trasporto-rifiuti-bibbiena",
      bucine: "/servizi/trasporto-rifiuti/trasporto-rifiuti-bucine",
      capolona: "/servizi/trasporto-rifiuti/trasporto-rifiuti-capolona",
      "caprese-michelangelo":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-caprese-michelangelo",
      "castel-focognano":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-castel-focognano",
      "castel-san-niccolo":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-castel-san-niccolo",
      "castelfranco-piandisco":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-castelfranco-piandisco",
      "castiglion-fibocchi":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-castiglion-fibocchi",
      "castiglion-fiorentino":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-castiglion-fiorentino",
      cavriglia: "/servizi/trasporto-rifiuti/trasporto-rifiuti-cavriglia",
      chitignano: "/servizi/trasporto-rifiuti/trasporto-rifiuti-chitignano",
      "chiusi-della-verna":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-chiusi-della-verna",
      "civitella-in-valdichiana":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-civitella-in-valdichiana",
      cortona: "/servizi/trasporto-rifiuti/trasporto-rifiuti-cortona",
      "figline-valdarno":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-figline-valdarno",
      "foiano-della-chiana":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-foiano-della-chiana",
      laterina: "/servizi/trasporto-rifiuti/trasporto-rifiuti-laterina",
      "loro-ciuffenna":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-loro-ciuffenna",
      lucignano: "/servizi/trasporto-rifiuti/trasporto-rifiuti-lucignano",
      "marciano-della-chiana":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-marciano-della-chiana",
      "monte-san-savino":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-monte-san-savino",
      montemignaio: "/servizi/trasporto-rifiuti/trasporto-rifiuti-montemignaio",
      monterchi: "/servizi/trasporto-rifiuti/trasporto-rifiuti-monterchi",
      montevarchi: "/servizi/trasporto-rifiuti/trasporto-rifiuti-montevarchi",
      "ortignano-raggiolo":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-ortignano-raggiolo",
      "pergine-valdarno":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-pergine-valdarno",
      "pieve-al-toppo":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-pieve-al-toppo",
      "pieve-santo-stefano":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-pieve-santo-stefano",
      poppi: "/servizi/trasporto-rifiuti/trasporto-rifiuti-poppi",
      "pratovecchio-stia":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-pratovecchio-stia",
      rassina: "/servizi/trasporto-rifiuti/trasporto-rifiuti-rassina",
      rigutino: "/servizi/trasporto-rifiuti/trasporto-rifiuti-rigutino",
      "san-giovanni-valdarno":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-san-giovanni-valdarno",
      sansepolcro: "/servizi/trasporto-rifiuti/trasporto-rifiuti-sansepolcro",
      sestino: "/servizi/trasporto-rifiuti/trasporto-rifiuti-sestino",
      soci: "/servizi/trasporto-rifiuti/trasporto-rifiuti-soci",
      subbiano: "/servizi/trasporto-rifiuti/trasporto-rifiuti-subbiano",
      talla: "/servizi/trasporto-rifiuti/trasporto-rifiuti-talla",
      "terranuova-bracciolini":
        "/servizi/trasporto-rifiuti/trasporto-rifiuti-terranuova-bracciolini",
    },
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
    "Autospurgo Figline Valdarno": links.autospurgo["figline-valdarno"],
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
      "Frantoio mobile inerti Arezzo":
        links.servizi["frantoio-mobile-inerti"].arezzo,
      "Frantoio mobile inerti Firenze":
        links.servizi["frantoio-mobile-inerti"].firenze,
      "Frantoio mobile inerti Grosseto":
        links.servizi["frantoio-mobile-inerti"].grosseto,
      "Frantoio mobile inerti Livorno":
        links.servizi["frantoio-mobile-inerti"].livorno,
      "Frantoio mobile inerti Lucca":
        links.servizi["frantoio-mobile-inerti"].lucca,
      "Frantoio mobile inerti Massa Carrara":
        links.servizi["frantoio-mobile-inerti"]["massa-carrara"],
      "Frantoio mobile inerti Pisa":
        links.servizi["frantoio-mobile-inerti"].pisa,
      "Frantoio mobile inerti Pistoia":
        links.servizi["frantoio-mobile-inerti"].pistoia,
      "Frantoio mobile inerti Prato":
        links.servizi["frantoio-mobile-inerti"].prato,
      "Frantoio mobile inerti Siena":
        links.servizi["frantoio-mobile-inerti"].siena,
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
      "Noleggio bagni chimici Chiusi della Verna":
        links.servizi["noleggio-bagni-chimici"]["chiusi-della-verna"],
      "Noleggio bagni chimici Civitella in Valdichiana":
        links.servizi["noleggio-bagni-chimici"]["civitella-in-valdichiana"],
      "Noleggio bagni chimici Cortona":
        links.servizi["noleggio-bagni-chimici"].cortona,
      "Noleggio bagni chimici Figline Valdarno":
        links.servizi["noleggio-bagni-chimici"]["figline-valdarno"],
      "Noleggio bagni chimici Foiano della Chiana":
        links.servizi["noleggio-bagni-chimici"]["foiano-della-chiana"],
      "Noleggio bagni chimici Laterina":
        links.servizi["noleggio-bagni-chimici"].laterina,
      "Noleggio bagni chimici Loro Ciuffenna":
        links.servizi["noleggio-bagni-chimici"]["loro-ciuffenna"],
      "Noleggio bagni chimici Lucignano":
        links.servizi["noleggio-bagni-chimici"].lucignano,
      "Noleggio bagni chimici Marciano della Chiana":
        links.servizi["noleggio-bagni-chimici"]["marciano-della-chiana"],
      "Noleggio bagni chimici Monte San Savino":
        links.servizi["noleggio-bagni-chimici"]["monte-san-savino"],
      "Noleggio bagni chimici Montemignaio":
        links.servizi["noleggio-bagni-chimici"].montemignaio,
      "Noleggio bagni chimici Monterchi":
        links.servizi["noleggio-bagni-chimici"].monterchi,
      "Noleggio bagni chimici Montevarchi":
        links.servizi["noleggio-bagni-chimici"].montevarchi,
      "Noleggio bagni chimici Ortignano Raggiolo":
        links.servizi["noleggio-bagni-chimici"]["ortignano-raggiolo"],
      "Noleggio bagni chimici Pergine Valdarno":
        links.servizi["noleggio-bagni-chimici"]["pergine-valdarno"],
      "Noleggio bagni chimici Pieve al Toppo":
        links.servizi["noleggio-bagni-chimici"]["pieve-al-toppo"],
      "Noleggio bagni chimici Pieve Santo Stefano":
        links.servizi["noleggio-bagni-chimici"]["pieve-santo-stefano"],
      "Noleggio bagni chimici Poppi":
        links.servizi["noleggio-bagni-chimici"].poppi,
      "Noleggio bagni chimici Pratovecchio Stia":
        links.servizi["noleggio-bagni-chimici"]["pratovecchio-stia"],
      "Noleggio bagni chimici Rassina":
        links.servizi["noleggio-bagni-chimici"].rassina,
      "Noleggio bagni chimici Rigutino":
        links.servizi["noleggio-bagni-chimici"].rigutino,
      "Noleggio bagni chimici San Giovanni Valdarno":
        links.servizi["noleggio-bagni-chimici"]["san-giovanni-valdarno"],
      "Noleggio bagni chimici Sansepolcro":
        links.servizi["noleggio-bagni-chimici"]["sansepolcro"],
      "Noleggio bagni chimici Sestino":
        links.servizi["noleggio-bagni-chimici"]["sestino"],
      "Noleggio bagni chimici Soci":
        links.servizi["noleggio-bagni-chimici"]["soci"],
      "Noleggio bagni chimici Subbiano":
        links.servizi["noleggio-bagni-chimici"]["subbiano"],
      "Noleggio bagni chimici Talla":
        links.servizi["noleggio-bagni-chimici"]["talla"],
      "Noleggio bagni chimici Terranuova Bracciolini":
        links.servizi["noleggio-bagni-chimici"]["terranuova-bracciolini"],
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
      "Pulizia fognature Chiusi della Verna":
        links.servizi["pulizia-fognature"]["chiusi-della-verna"],
      "Pulizia fognature Civitella in Valdichiana":
        links.servizi["pulizia-fognature"]["civitella-in-valdichiana"],
      "Pulizia fognature Cortona": links.servizi["pulizia-fognature"].cortona,
      "Pulizia fognature Figline Valdarno":
        links.servizi["pulizia-fognature"]["figline-valdarno"],
      "Pulizia fognature Foiano della Chiana":
        links.servizi["pulizia-fognature"]["foiano-della-chiana"],
      "Pulizia fognature Laterina": links.servizi["pulizia-fognature"].laterina,
      "Pulizia fognature Loro Ciuffenna":
        links.servizi["pulizia-fognature"]["loro-ciuffenna"],
      "Pulizia fognature Lucignano":
        links.servizi["pulizia-fognature"].lucignano,
      "Pulizia fognature Marciano della Chiana":
        links.servizi["pulizia-fognature"]["marciano-della-chiana"],
      "Pulizia fognature Monte San Savino":
        links.servizi["pulizia-fognature"]["monte-san-savino"],
      "Pulizia fognature Montemignaio":
        links.servizi["pulizia-fognature"].montemignaio,
      "Pulizia fognature Monterchi":
        links.servizi["pulizia-fognature"].monterchi,
      "Pulizia fognature Montevarchi":
        links.servizi["pulizia-fognature"].montevarchi,
      "Pulizia fognature Ortignano Raggiolo":
        links.servizi["pulizia-fognature"]["ortignano-raggiolo"],
      "Pulizia fognature Pergine Valdarno":
        links.servizi["pulizia-fognature"]["pergine-valdarno"],
      "Pulizia fognature Pieve al Toppo":
        links.servizi["pulizia-fognature"]["pieve-al-toppo"],
      "Pulizia fognature Pieve Santo Stefano":
        links.servizi["pulizia-fognature"]["pieve-santo-stefano"],
      "Pulizia fognature Poppi": links.servizi["pulizia-fognature"].poppi,
      "Pulizia fognature Pratovecchio Stia":
        links.servizi["pulizia-fognature"]["pratovecchio-stia"],
      "Pulizia fognature Rassina": links.servizi["pulizia-fognature"].rassina,
      "Pulizia fognature Rigutino": links.servizi["pulizia-fognature"].rigutino,
      "Pulizia fognature San Giovanni Valdarno":
        links.servizi["pulizia-fognature"]["san-giovanni-valdarno"],
      "Pulizia fognature Sansepolcro":
        links.servizi["pulizia-fognature"]["sansepolcro"],
      "Pulizia fognature Sestino":
        links.servizi["pulizia-fognature"]["sestino"],
      "Pulizia fognature Soci": links.servizi["pulizia-fognature"]["soci"],
      "Pulizia fognature Subbiano":
        links.servizi["pulizia-fognature"]["subbiano"],
      "Pulizia fognature Talla": links.servizi["pulizia-fognature"]["talla"],
      "Pulizia fognature Terranuova Bracciolini":
        links.servizi["pulizia-fognature"]["terranuova-bracciolini"],
    },
    "Recupero materiali ferrosi": links.servizi["recupero-materiali-ferrosi"],
    "Spurgo fosse biologiche": {
      "Spurgo fosse biologiche Anghiari":
        links.servizi["spurgo-fosse-biologiche"].anghiari,
      "Spurgo fosse biologiche Arezzo":
        links.servizi["spurgo-fosse-biologiche"].arezzo,
      "Spurgo fosse biologiche Badia Tedalda":
        links.servizi["spurgo-fosse-biologiche"]["badia-tedalda"],
      "Spurgo fosse biologiche Bibbiena":
        links.servizi["spurgo-fosse-biologiche"].bibbiena,
      "Spurgo fosse biologiche Bucine":
        links.servizi["spurgo-fosse-biologiche"].bucine,
      "Spurgo fosse biologiche Capolona":
        links.servizi["spurgo-fosse-biologiche"].capolona,
      "Spurgo fosse biologiche Caprese Michelangelo":
        links.servizi["spurgo-fosse-biologiche"]["caprese-michelangelo"],
      "Spurgo fosse biologiche Castel Focognano":
        links.servizi["spurgo-fosse-biologiche"]["castel-focognano"],
      "Spurgo fosse biologiche Castel Niccolò":
        links.servizi["spurgo-fosse-biologiche"]["castel-san-niccolo"],
      "Spurgo fosse biologiche Castelfranco Piandiscò":
        links.servizi["spurgo-fosse-biologiche"]["castelfranco-piandisco"],
      "Spurgo fosse biologiche Castiglion Fibocchi":
        links.servizi["spurgo-fosse-biologiche"]["castiglion-fibocchi"],
      "Spurgo fosse biologiche Castiglion Fiorentino":
        links.servizi["spurgo-fosse-biologiche"]["castiglion-fiorentino"],
      "Spurgo fosse biologiche Cavriglia":
        links.servizi["spurgo-fosse-biologiche"].cavriglia,
      "Spurgo fosse biologiche Chitignano":
        links.servizi["spurgo-fosse-biologiche"].chitignano,
      "Spurgo fosse biologiche Chiusi della Verna":
        links.servizi["spurgo-fosse-biologiche"]["chiusi-della-verna"],
      "Spurgo fosse biologiche Civitella in Valdichiana":
        links.servizi["spurgo-fosse-biologiche"]["civitella-in-valdichiana"],
      "Spurgo fosse biologiche Cortona":
        links.servizi["spurgo-fosse-biologiche"].cortona,
      "Spurgo fosse biologiche Figline Valdarno":
        links.servizi["spurgo-fosse-biologiche"]["figline-valdarno"],
      "Spurgo fosse biologiche Foiano della Chiana":
        links.servizi["spurgo-fosse-biologiche"]["foiano-della-chiana"],
      "Spurgo fosse biologiche Laterina":
        links.servizi["spurgo-fosse-biologiche"].laterina,
      "Spurgo fosse biologiche Loro Ciuffenna":
        links.servizi["spurgo-fosse-biologiche"]["loro-ciuffenna"],
      "Spurgo fosse biologiche Lucignano":
        links.servizi["spurgo-fosse-biologiche"].lucignano,
      "Spurgo fosse biologiche Marciano della Chiana":
        links.servizi["spurgo-fosse-biologiche"]["marciano-della-chiana"],
      "Spurgo fosse biologiche Monte San Savino":
        links.servizi["spurgo-fosse-biologiche"]["monte-san-savino"],
      "Spurgo fosse biologiche Montemignaio":
        links.servizi["spurgo-fosse-biologiche"].montemignaio,
      "Spurgo fosse biologiche Monterchi":
        links.servizi["spurgo-fosse-biologiche"].monterchi,
      "Spurgo fosse biologiche Montevarchi":
        links.servizi["spurgo-fosse-biologiche"].montevarchi,
      "Spurgo fosse biologiche Ortignano Raggiolo":
        links.servizi["spurgo-fosse-biologiche"]["ortignano-raggiolo"],
      "Spurgo fosse biologiche Pergine Valdarno":
        links.servizi["spurgo-fosse-biologiche"]["pergine-valdarno"],
      "Spurgo fosse biologiche Pieve al Toppo":
        links.servizi["spurgo-fosse-biologiche"]["pieve-al-toppo"],
      "Spurgo fosse biologiche Pieve Santo Stefano":
        links.servizi["spurgo-fosse-biologiche"]["pieve-santo-stefano"],
      "Spurgo fosse biologiche Poppi":
        links.servizi["spurgo-fosse-biologiche"].poppi,
      "Spurgo fosse biologiche Pratovecchio Stia":
        links.servizi["spurgo-fosse-biologiche"]["pratovecchio-stia"],
      "Spurgo fosse biologiche Rassina":
        links.servizi["spurgo-fosse-biologiche"].rassina,
      "Spurgo fosse biologiche Rigutino":
        links.servizi["spurgo-fosse-biologiche"].rigutino,
      "Spurgo fosse biologiche San Giovanni Valdarno":
        links.servizi["spurgo-fosse-biologiche"]["san-giovanni-valdarno"],
      "Spurgo fosse biologiche Sansepolcro":
        links.servizi["spurgo-fosse-biologiche"]["sansepolcro"],
      "Spurgo fosse biologiche Sestino":
        links.servizi["spurgo-fosse-biologiche"]["sestino"],
      "Spurgo fosse biologiche Soci":
        links.servizi["spurgo-fosse-biologiche"]["soci"],
      "Spurgo fosse biologiche Subbiano":
        links.servizi["spurgo-fosse-biologiche"]["subbiano"],
      "Spurgo fosse biologiche Talla":
        links.servizi["spurgo-fosse-biologiche"]["talla"],
      "Spurgo fosse biologiche Terranuova Bracciolini":
        links.servizi["spurgo-fosse-biologiche"]["terranuova-bracciolini"],
    },
    "Trasporto acqua": {
      "Trasporto acqua Anghiari": links.servizi["trasporto-acqua"].anghiari,
      "Trasporto acqua Arezzo": links.servizi["trasporto-acqua"].arezzo,
      "Trasporto acqua Badia Tedalda":
        links.servizi["trasporto-acqua"]["badia-tedalda"],
      "Trasporto acqua Bibbiena": links.servizi["trasporto-acqua"].bibbiena,
      "Trasporto acqua Bucine": links.servizi["trasporto-acqua"].bucine,
      "Trasporto acqua Capolona": links.servizi["trasporto-acqua"].capolona,
      "Trasporto acqua Caprese Michelangelo":
        links.servizi["trasporto-acqua"]["caprese-michelangelo"],
      "Trasporto acqua Castel Focognano":
        links.servizi["trasporto-acqua"]["castel-focognano"],
      "Trasporto acqua Castel Niccolò":
        links.servizi["trasporto-acqua"]["castel-san-niccolo"],
      "Trasporto acqua Castelfranco Piandiscò":
        links.servizi["trasporto-acqua"]["castelfranco-piandisco"],
      "Trasporto acqua Castiglion Fibocchi":
        links.servizi["trasporto-acqua"]["castiglion-fibocchi"],
      "Trasporto acqua Castiglion Fiorentino":
        links.servizi["trasporto-acqua"]["castiglion-fiorentino"],
      "Trasporto acqua Cavriglia": links.servizi["trasporto-acqua"].cavriglia,
      "Trasporto acqua Chitignano": links.servizi["trasporto-acqua"].chitignano,
      "Trasporto acqua Chiusi della Verna":
        links.servizi["trasporto-acqua"]["chiusi-della-verna"],
      "Trasporto acqua Civitella in Valdichiana":
        links.servizi["trasporto-acqua"]["civitella-in-valdichiana"],
      "Trasporto acqua Cortona": links.servizi["trasporto-acqua"].cortona,
      "Trasporto acqua Foiano della Chiana":
        links.servizi["trasporto-acqua"]["foiano-della-chiana"],
      "Trasporto acqua Figline Valdarno":
        links.servizi["trasporto-acqua"]["figline-valdarno"],
      "Trasporto acqua Laterina": links.servizi["trasporto-acqua"].laterina,
      "Trasporto acqua Loro Ciuffenna":
        links.servizi["trasporto-acqua"]["loro-ciuffenna"],
      "Trasporto acqua Lucignano": links.servizi["trasporto-acqua"].lucignano,
      "Trasporto acqua Marciano della Chiana":
        links.servizi["trasporto-acqua"]["marciano-della-chiana"],
      "Trasporto acqua Monte San Savino":
        links.servizi["trasporto-acqua"]["monte-san-savino"],
      "Trasporto acqua Montemignaio":
        links.servizi["trasporto-acqua"].montemignaio,
      "Trasporto acqua Monterchi": links.servizi["trasporto-acqua"].monterchi,
      "Trasporto acqua Montevarchi":
        links.servizi["trasporto-acqua"].montevarchi,
      "Trasporto acqua Ortignano Raggiolo":
        links.servizi["trasporto-acqua"]["ortignano-raggiolo"],
      "Trasporto acqua Pergine Valdarno":
        links.servizi["trasporto-acqua"]["pergine-valdarno"],
      "Trasporto acqua Pieve al Toppo":
        links.servizi["trasporto-acqua"]["pieve-al-toppo"],
      "Trasporto acqua Pieve Santo Stefano":
        links.servizi["trasporto-acqua"]["pieve-santo-stefano"],
      "Trasporto acqua Poppi": links.servizi["trasporto-acqua"].poppi,
      "Trasporto acqua Pratovecchio Stia":
        links.servizi["trasporto-acqua"]["pratovecchio-stia"],
      "Trasporto acqua Rassina": links.servizi["trasporto-acqua"].rassina,
      "Trasporto acqua Rigutino": links.servizi["trasporto-acqua"].rigutino,
      "Trasporto acqua San Giovanni Valdarno":
        links.servizi["trasporto-acqua"]["san-giovanni-valdarno"],
      "Trasporto acqua Sansepolcro":
        links.servizi["trasporto-acqua"]["sansepolcro"],
      "Trasporto acqua Sestino": links.servizi["trasporto-acqua"]["sestino"],
      "Trasporto acqua Soci": links.servizi["trasporto-acqua"]["soci"],
      "Trasporto acqua Subbiano": links.servizi["trasporto-acqua"]["subbiano"],
      "Trasporto acqua Talla": links.servizi["trasporto-acqua"]["talla"],
      "Trasporto acqua Terranuova Bracciolini":
        links.servizi["trasporto-acqua"]["terranuova-bracciolini"],
    },
    "Trasporto rifiuti": {
      "Trasporto rifiuti Anghiari": links.servizi["trasporto-rifiuti"].anghiari,
      "Trasporto rifiuti Arezzo": links.servizi["trasporto-rifiuti"].arezzo,
      "Trasporto rifiuti Badia Tedalda":
        links.servizi["trasporto-rifiuti"]["badia-tedalda"],
      "Trasporto rifiuti Bibbiena": links.servizi["trasporto-rifiuti"].bibbiena,
      "Trasporto rifiuti Bucine": links.servizi["trasporto-rifiuti"].bucine,
      "Trasporto rifiuti Capolona": links.servizi["trasporto-rifiuti"].capolona,
      "Trasporto rifiuti Caprese Michelangelo":
        links.servizi["trasporto-rifiuti"]["caprese-michelangelo"],
      "Trasporto rifiuti Castel Focognano":
        links.servizi["trasporto-rifiuti"]["castel-focognano"],
      "Trasporto rifiuti Castel Niccolò":
        links.servizi["trasporto-rifiuti"]["castel-san-niccolo"],
      "Trasporto rifiuti Castelfranco Piandiscò":
        links.servizi["trasporto-rifiuti"]["castelfranco-piandisco"],
      "Trasporto rifiuti Castiglion Fibocchi":
        links.servizi["trasporto-rifiuti"]["castiglion-fibocchi"],
      "Trasporto rifiuti Castiglion Fiorentino":
        links.servizi["trasporto-rifiuti"]["castiglion-fiorentino"],
      "Trasporto rifiuti Cavriglia":
        links.servizi["trasporto-rifiuti"].cavriglia,
      "Trasporto rifiuti Chitignano":
        links.servizi["trasporto-rifiuti"].chitignano,
      "Trasporto rifiuti Chiusi della Verna":
        links.servizi["trasporto-rifiuti"]["chiusi-della-verna"],
      "Trasporto rifiuti Civitella in Valdichiana":
        links.servizi["trasporto-rifiuti"]["civitella-in-valdichiana"],
      "Trasporto rifiuti Cortona": links.servizi["trasporto-rifiuti"].cortona,
      "Trasporto rifiuti Foiano della Chiana":
        links.servizi["trasporto-rifiuti"]["foiano-della-chiana"],
      "Trasporto rifiuti Figline Valdarno":
        links.servizi["trasporto-rifiuti"]["figline-valdarno"],
      "Trasporto rifiuti Laterina": links.servizi["trasporto-rifiuti"].laterina,
      "Trasporto rifiuti Loro Ciuffenna":
        links.servizi["trasporto-rifiuti"]["loro-ciuffenna"],
      "Trasporto rifiuti Lucignano":
        links.servizi["trasporto-rifiuti"].lucignano,
      "Trasporto rifiuti Marciano della Chiana":
        links.servizi["trasporto-rifiuti"]["marciano-della-chiana"],
      "Trasporto rifiuti Monte San Savino":
        links.servizi["trasporto-rifiuti"]["monte-san-savino"],
      "Trasporto rifiuti Montemignaio":
        links.servizi["trasporto-rifiuti"].montemignaio,
      "Trasporto rifiuti Monterchi":
        links.servizi["trasporto-rifiuti"].monterchi,
      "Trasporto rifiuti Montevarchi":
        links.servizi["trasporto-rifiuti"].montevarchi,
      "Trasporto rifiuti Ortignano Raggiolo":
        links.servizi["trasporto-rifiuti"]["ortignano-raggiolo"],
      "Trasporto rifiuti Pergine Valdarno":
        links.servizi["trasporto-rifiuti"]["pergine-valdarno"],
      "Trasporto rifiuti Pieve al Toppo":
        links.servizi["trasporto-rifiuti"]["pieve-al-toppo"],
      "Trasporto rifiuti Pieve Santo Stefano":
        links.servizi["trasporto-rifiuti"]["pieve-santo-stefano"],
      "Trasporto rifiuti Poppi": links.servizi["trasporto-rifiuti"].poppi,
      "Trasporto rifiuti Pratovecchio Stia":
        links.servizi["trasporto-rifiuti"]["pratovecchio-stia"],
      "Trasporto rifiuti Rassina": links.servizi["trasporto-rifiuti"].rassina,
      "Trasporto rifiuti Rigutino": links.servizi["trasporto-rifiuti"].rigutino,
      "Trasporto rifiuti San Giovanni Valdarno":
        links.servizi["trasporto-rifiuti"]["san-giovanni-valdarno"],
      "Trasporto rifiuti Sansepolcro":
        links.servizi["trasporto-rifiuti"]["sansepolcro"],
      "Trasporto rifiuti Sestino":
        links.servizi["trasporto-rifiuti"]["sestino"],
      "Trasporto rifiuti Soci": links.servizi["trasporto-rifiuti"]["soci"],
      "Trasporto rifiuti Subbiano":
        links.servizi["trasporto-rifiuti"]["subbiano"],
      "Trasporto rifiuti Talla": links.servizi["trasporto-rifiuti"]["talla"],
      "Trasporto rifiuti Terranuova Bracciolini":
        links.servizi["trasporto-rifiuti"]["terranuova-bracciolini"],
    },
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
  imageSrc:
    "https://www.maggi-mariano.it/wp-content/uploads/2022/05/ecologia.jpg",
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
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ferrosi-200-1.png",
    href: links.servizi["recupero-materiali-ferrosi"],
  },
  {
    id: "service-2",
    title: "Spurgo",
    subtitle: "Fosse biologiche",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/fosse-200-1.png",
    href: links.servizi["spurgo-fosse-biologiche"].root,
  },
  {
    id: "service-3",
    title: "Noleggio",
    subtitle: "Bagni chimici",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/bagni-200-1.png",
    href: links.servizi["noleggio-bagni-chimici"].root,
  },
  {
    id: "service-4",
    title: "Trasporto",
    subtitle: "Acqua potabile",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/acqua-200-2.png",
    href: links.servizi["trasporto-acqua"].root,
  },
  {
    id: "service-5",
    title: "Videoispezioni",
    subtitle: "con telecamera robot",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ispezioni-200-1.png",
    href: links.servizi["videoispezioni-telecamera-robot"],
  },
  {
    id: "service-6",
    title: "Noleggio",
    subtitle: "container e cassoni",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/cassoni-scarrabili-200-1.png",
    href: links.servizi["noleggio-container-e-cassoni"],
  },
  {
    id: "service-7",
    title: "Escavatore",
    subtitle: "a risucchio",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/risucchio-200-1.png",
    href: links.servizi["escavatore-a-risucchio"],
  },
  {
    id: "service-8",
    title: "Trasporto",
    subtitle: "rifiuti",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/bonifiche-200-1.png",
    href: links.servizi["trasporto-rifiuti"].root,
  },
  {
    id: "service-9",
    title: "Container",
    subtitle: "rifiuti speciali",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/container-200-1.png",
    href: links.servizi["noleggio-container-e-cassoni"],
  },
  {
    id: "service-10",
    title: "Centrifugazione",
    subtitle: "fanghi",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/06/fanghi-200-1.png",
    href: links.servizi["centrifugazione-o-disidratazione-fanghi"],
  },
  {
    id: "service-11",
    title: "Frantoio mobile",
    subtitle: "inerti",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/09/frantoio-200.png",
    href: links.servizi["frantoio-mobile-inerti"].root,
  },
  {
    id: "service-12",
    title: "Spurgo",
    subtitle: "fognature",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/08/disotturazione-fognature-200.png",
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
    src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/img0001.png",
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
            href: "https://www.google.it",
          },
        },
        {
          title: "Sede Arezzo",
          icon: "map",
          link: {
            label: "Loc. San Giuliano, Arezzo (AR)",
            href: "https://www.google.it",
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
            <span>
              Ti invitiamo a consultare la nostra{" "}
              <Link
                target="_blank"
                href={links.privacy["privacy-policy"]}
                className="underline text-blue-600"
              >
                privacy policy a questo link
              </Link>
              .
            </span>,
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
            "Questo sito può consentire ad entità terze (e.g. Google) di memorizzare nel tuo browser dei cookie. Se disabilitati, alcune funzionalità (ad esempio le mappe di Google Maps) non saranno disponibili.",
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
    extendedTitle: "Maggi Mariano Servizi Ecologici",
    email: "serviziecologici@maggimariano.it",
    iconSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/05/favico-150x150.png",
    logoSrc:
      "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi.png",
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
