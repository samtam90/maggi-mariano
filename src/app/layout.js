import Script from "next/script";
import appConfig from "../../app.config";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const description =
  "Video Ispezioni con telecamera robot, spurgo fosse biologiche, escavatore a risucchio - Maggi Mariano Servizi Ecologici, sa sempre al fianco di aziende e cittadini per la salvaguardia dell'ambiente.";

export const metadata = {
  title: "Home - Maggi Mariano Servizi Ecologici",
  description,
  icon: appConfig.misc.iconSrc,
  openGraph: {
    title: "Maggi Mariano Servizi Ecologici",
    description,
    url: `https://${appConfig.misc.url}`,
    locale: "it_IT",
    type: "website",
    images: [
      {
        width: 131,
        height: 48,
        url: "https://www.maggi-mariano.it/immagini/misc/logo-maggi.png",
        alt: "Maggi Mariano Servizi Ecologici",
      },
    ],
  },
};

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
        <GoogleAnalytics gaId={appConfig.misc.googleAnalyticsId} />
      </head>
      <body>{children}</body>
    </html>
  );
}
