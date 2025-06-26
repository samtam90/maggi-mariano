import React from "react";
import DocumentsTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/Documents",
  component: DocumentsTemplate,
};

const imgDims = { width: 512, height: 512 };

const T = (args) => (
  <AppThemeProvider>
    <DocumentsTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  title: { left: "Documenti", right: "Autorizzazioni" },
  documents: [
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ALBO-AUTOTRASPORTATORI-pdf-214x300-1.jpg",
        dimensions: imgDims,
        sources: [
          {
            type: "image/jpeg",
            srcset: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/ALBO-AUTOTRASPORTATORI-pdf-214x300-1.jpg",
          },
        ],
      },
      label: "ALBO AUTOTRASPORTATORI",
      href: "https://www.maggi-mariano.it/documenti/ALBO-AUTOTRASPORTATORI.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/Autorizzazione-Maggi-1F-2021-2026.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 1F 2021-2026",
      href: "https://www.maggi-mariano.it/wp-content/uploads/2025/04/2025_2028_CERT-ISO-9001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/Autorizzazione-Maggi-4B-2022-2027.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 4B 2022-2027",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%204B%202022-2027.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/Autorizzazione-Maggi-5F-2022-2027.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 5F 2022-2027",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%205F%202022-2027.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/Autorizzazione-Maggi-8D-2021-2026.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE MAGGI MARIANO 8D 2021-2026",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%208D%202021-2026.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/2022_2025_CERT-ISO-9001_MAGGI-MARIANO.jpg",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 9001-2015 Rev. 29.09.2022",
      href: "https://www.maggi-mariano.it/documenti/Autorizzazione%20Maggi%208D%202021-2026.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/11/2022_2025_CERT-ISO-14001_MAGGI-MARIANO.jpg",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 14001-2015 Rev. 29.09.2022",
      href: "https://www.maggi-mariano.it/wp-content/uploads/2025/03/2025_2028_CERT-ISO-14001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2024/10/Untitled.png",
        dimensions: imgDims,
      },
      label: "CERTIFICATO ISO 45001-2018",
      href: "https://www.maggi-mariano.it/wp-content/uploads/2025/02/2024_2027_CERT_ISO-45001_MAGGI-MARIANO.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/politica-integrata-212x300-1.jpg",
        dimensions: imgDims,
      },
      label:
        "POLITICA INTEGRATA QUALITÀ AMBIENTE SALUTE E SICUREZZA SUL LAVORO",
      href: "https://www.maggi-mariano.it/wp-content/uploads/2025/02/Politica-Integrata-qualita-ambiente-sicurezza.pdf",
    },
    {
      image: {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/IMPIANTO-MOBILE-212x300-1.jpg",
        dimensions: imgDims,
      },
      label: "AUTORIZZAZIONE IMPIANTO MOBILE DI FRANTUMAZIONE",
      href: "https://www.maggi-mariano.it/documenti/Decreto_n.18809_del_28-10-2021.pdf",
    },
  ],
};
