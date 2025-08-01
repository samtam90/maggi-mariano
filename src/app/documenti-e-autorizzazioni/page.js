import { withConditionalRendering } from "@/misc/functions";

const imgDims = { width: 512, height: 512 };
const props = {
  title: {
    left: "Documenti e autorizzazioni",
    right: "Maggi Mariano Servizi Ecologici",
  },
  documents: [
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/ALBO-AUTOTRASPORTATORI-pdf-214x300-1.jpg",
        dimensions: imgDims,
      },
      label: "ALBO AUTOTRASPORTATORI",
      href: "https://www.maggi-mariano.it/documenti/ALBO-AUTOTRASPORTATORI.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/Autorizzazione-Maggi-1F-2021-2026.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 1F 2021-2026",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione Maggi 1F 2021-2026.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/Autorizzazione-Maggi-4B-2022-2027.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 4B 2022-2027",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%204B%202022-2027.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/Autorizzazione-Maggi-5F-2022-2027.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 5F 2022-2027",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%205F%202022-2027.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/Autorizzazione-Maggi-8D-2021-2026.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 8D 2021-2026",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%208D%202021-2026.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/2022_2025_CERT-ISO-9001_MAGGI-MARIANO.jpg",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 9001-2015 Rev. 29.09.2022",
      href: "https://www.maggi-mariano.it/documenti/2022_2025_Rev.-29.09.2022_CERT-ISO-9001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/2022_2025_CERT-ISO-14001_MAGGI-MARIANO.jpg",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 14001-2015 Rev. 29.09.2022",
      href: "https://www.maggi-mariano.it/documenti/2025_2028_CERT-ISO-14001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/Untitled.png",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 45001-2018",
      href: "https://www.maggi-mariano.it/documenti/2024_2027_CERT_ISO-45001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/politica-integrata-212x300-1.jpg",
        dimensions: imgDims,
      },
      label:
        "POLITICA INTEGRATA QUALITÀ AMBIENTE SALUTE E SICUREZZA SUL LAVORO",
      href: "https://www.maggi-mariano.it/documenti/Politica-Integrata-qualita-ambiente-sicurezza.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/immagini/misc/IMPIANTO-MOBILE-212x300-1.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE IMPIANTO MOBILE DI FRANTUMAZIONE",
      href: "https://www.maggi-mariano.it/documenti/Decreto_n.18809_del_28-10-2021.pdf",
    },
  ],
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/Documents/alt/mobile"),
  Desktop: import("@/templates/Documents/alt/desktop"),
});

export default function Page({ searchParams }) {
  return <ConditionalPage searchParams={searchParams} {...props} />;
}
