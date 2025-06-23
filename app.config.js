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
  contatti: "/contatti",
  "documenti-e-autorizzazioni": "/documenti-e-autorizzazioni",
  servizi: {
    "centrifugazione-o-disidratazione-fanghi":
      "/servizi/centrifugazione-o-disidratazione-fanghi",
    "escavatore-a-risucchio": "/servizi/escavatore-a-risucchio",
    "frantoio-mobile-inerti": {
      root: "/servizi/frantoio-mobile-inerti",
      arezzo: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-arezzo",
      siena: "/servizi/frantoio-mobile-inerti/frantoio-mobile-inerti-siena",
    },
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
    "recupero-materiali-ferrosi": "/servizi/recupero-materiali-ferrosi",
    "spurgo-fosse-biologiche": {
      root: "/servizi/spurgo-fosse-biologiche",
      anghiari:
        "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-anghiari",
      arezzo: "/servizi/spurgo-fosse-biologiche/spurgo-fosse-biologiche-arezzo",
      "badia-tedalda":
        "/spurgo-fosse-biologiche/servizi/spurgo-fosse-biologiche-badia-tedalda",
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
    },
    "trasporto-acqua": {
      root: "/servizi/trasporto-acqua",
      anghiari: "/servizi/trasporto-acqua/trasporto-acqua-anghiari",
      arezzo: "/servizi/trasporto-acqua/trasporto-acqua-arezzo",
      "badia-tedalda": "/trasporto-acqua/servizi/trasporto-acqua-badia-tedalda",
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
    },
    "videoispezioni-telecamera-robot":
      "/servizi/videoispezioni-con-telecamera-robot",
  },
  videogallery: "/videogallery",
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
