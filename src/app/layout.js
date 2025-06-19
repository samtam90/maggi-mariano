import "./globals.css";

export const metadata = {
  title: "Maggi Mariano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
