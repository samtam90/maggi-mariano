import Script from "next/script";
import appConfig from "../../app.config";
import { GoogleAnalytics } from "@next/third-parties/google";
import ReactDOM from "react-dom";
import "./globals.css";

const description = getDescription({
  mainContent:
    "Video Ispezioni con telecamera robot, spurgo fosse biologiche, escavatore a risucchio",
});

export function getOpenGraphMetadata({ title, description }) {
  return {
    title,
    description,
    url: `https://${appConfig.misc.url}`,
    locale: "it_IT",
    type: "website",
    images: [
      {
        width: 131,
        height: 48,
        url: "https://www.maggi-mariano.it/immagini/logo.png",
        alt: title,
      },
    ],
  };
}

export const metadata = {
  title: "Home - Maggi Mariano Servizi Ecologici",
  description,
  icon: appConfig.misc.iconSrc,
  openGraph: getOpenGraphMetadata({
    title: "Maggi Mariano Servizi Ecologici",
    description,
  }),
};

function Preload() {
  ReactDOM.preload("https://www.maggi-mariano.it/immagini/title.jpg", {
    type: "image/jpeg",
    as: "image",
    fetchPriority: "high",
  });
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maggi Mariano Servizi Ecologici",
  headline: description,
  image: appConfig.data.iconSrc,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preload />
        <GoogleAnalytics gaId={appConfig.misc.googleAnalyticsId} />
      </head>
      <body>{children}</body>
    </html>
  );
}

export function getDescription({ mainContent }) {
  return `${mainContent} - Maggi Mariano Servizi Ecologici, al fianco di aziende e cittadini alla salvaguardia dell'ambiente.`;
}
