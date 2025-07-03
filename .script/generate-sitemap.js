const { generateSitemap } = require("./generate-sitemap/index");
const templatesData = require("../.data/templates-data.json");

const outPath = process.argv[2];
const baseUrl = process.argv[3];

function processBaseUrl(baseUrl, prefixPath) {
  if (prefixPath !== "autospurgo") {
    return `${baseUrl}/servizi`;
  }
  return baseUrl;
}

const prefixes = [
  { title: "Autospurgo", path: "autospurgo" },
  { title: "Frantoio mobile inerti", path: "frantoio-mobile-inerti" },
  { title: "Noleggio bagni chimici", path: "noleggio-bagni-chimici" },
  { title: "Pulizia fognature", path: "pulizia-fognature" },
  { title: "Spurgo fosse biologiche", path: "spurgo-fosse-biologiche" },
  { title: "Trasporto acqua", path: "trasporto-acqua" },
  { title: "Trasporto rifiuti", path: "trasporto-rifiuti" },
];
const { suffixes } = templatesData;
const additionalElements = [
  {
    id: "home",
    path: "",
    name: "Home",
  },
  {
    id: "contatti",
    path: "/contatti",
    name: "I nostri contatti",
  },
  {
    id: "documenti-e-autorizzazioni",
    path: "/documenti-e-autorizzazioni",
    name: "Documenti e Autorizzazioni",
  },
  {
    id: "videogallery",
    path: "/videogallery",
    name: "La nostra Videogallery",
  },
  {
    id: "centrifugazione-o-disidratazione-fanghi",
    path: "/servizi/centrifugazione-o-disidratazione-fanghi",
    name: "Centrifugazione o disidratazione fanghi",
  },
  {
    id: "escavatore-a-risucchio",
    path: "/servizi/escavatore-a-risucchio",
    name: "Escavatore a risucchio",
  },
  {
    id: "noleggio-container-e-cassoni",
    path: "/servizi/noleggio-container-e-cassoni",
    name: "Noleggio container e cassoni",
  },
  {
    id: "recupero-materiali-ferrosi",
    path: "/servizi/recupero-materiali-ferrosi",
    name: "Recupero materiali ferrosi",
  },
  {
    id: "videoispezioni-con-telecamera-robot",
    path: "/servizi/videoispezioni-con-telecamera-robot",
    name: "Videoispezioni con telecamera robot",
  },
];

function getAdditionalElements(baseUrl) {
  return additionalElements.map((e) => ({ ...e, url: `${baseUrl}${e.path}` }));
}

(async function () {
  await generateSitemap(
    { prefixes, suffixes },
    getAdditionalElements(baseUrl, additionalElements),
    baseUrl,
    outPath,
    processBaseUrl
  );
})();
