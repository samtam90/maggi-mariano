import appConfig from "../../app.config";
import "./globals.css";

export const metadata = {
  title: "Home - Maggi Mariano Servizi Ecologici",
  description:
    "Video Ispezioni con telecamera robot, spurgo fosse biologiche, escavatore a risucchio - Maggi Mariano Servizi Ecologici, sa sempre al fianco di aziende e cittadini per la salvaguardia dell'ambiente.",
  icon: appConfig.misc.iconSrc,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
