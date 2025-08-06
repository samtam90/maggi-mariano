import React from "react";
import MainContentTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";
import AdditionalServiceLocations from "../../components/AdditionalServiceLocations";

export default {
  title: "Templates/MainContent",
  component: MainContentTemplate,
  argTypes: {
    onContactFormSubmit: {
      action: "onContactFormSubmit",
      table: { disable: true },
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <MainContentTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  sections: {
    mainContent: {
      title: {
        left: "Autospurgo Anghiari",
        right: "Maggi Mariano Servizi Ecologici",
      },
      sections: [
        {
          paragraphs: [
            <span className="text-gray-700 font-titleBold">
              Operiamo nel settore da anni e nel tempo ci siamo attrezzati con i
              migliori macchinari e le migliori tecnologie che ci permettono di
              garantire interventi tempestivi, poco invasivi e soprattutto a
              prezzi estremamente concorrenziali.
            </span>,
            <span>
              Garantiamo{" "}
              <span className="text-gray-700 font-titleBold">
                risposte ideali per disostruire , svuotare e liberare
              </span>{" "}
              qualsiasi impianto, dai alle fognature e fosse biologiche.
            </span>,
            "Offriamo il servizio di Autospurgo Anghiari con professionalità e in modo programmato!",
            "E’ possibile stabilire a priori e programmare le nostre ispezioni e interventi per tutto l’anno evitando le urgenze e le problematiche che ne conseguono.",
          ],
          mediaElements: [
            {
              label: "Image1",
              src: "https://www.maggi-mariano.it/immagini/misc/fognature-1.jpg",
              dimensions: { width: 800, height: 550 },
            },
          ],
        },
        {
          paragraphs: [
            "Ci siamo dotati da tempo di un parco mezzi estremamente vario e tecnologicamente avanzato.",
            "Siamo in grado di effettuare l’ Autospurgo Anghiari anche in ambienti difficilmente raggiungibili con i normali mezzi come abitazioni in centri storici o in località montane difficili da raggiungere.",
            "Effettuiamo anche la stasatura e disotturazione di tubature, fosse biologiche, scarichi fognari e la pulizia di tombini.",
            "Trasportiamo acqua potabile per il riempimento di cisterne e piscine per privati, alberghi, ristoranti, comunità e agriturismi.",
          ],
          mediaElements: [
            {
              label: "Image2",
              srcset: "https://www.maggi-mariano.it/immagini/misc/Maggi2.jpg",
              dimensions: { width: 400, height: 300 },
            },
          ],
          classNames: {
            mediaContainer: "basis-25",
            paragraphsContainer: "flex-grow",
            paragraphs: "mb-4",
          },
        },
        {
          content: (
            <AdditionalServiceLocations
              locations={Array.from({ length: 32 }).map((v, k) => `loc${k}`)}
              serviceName="autospurgo"
              maxInitialShownLocations={12}
            />
          ),
        },
      ],
    },
    locations: {
      items: Array.from({ length: 24 }).map((v, i) => ({
        label: `Element ${i + 1}`,
        href: "https://www.google.it",
      })),
      title: (
        <span>
          Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
          tutti i luoghi e comuni della provincia di arezzo:
        </span>
      ),
    },
    contacts: {
      preTitle: "Per ogni tua problematica e urgenza riguardante",
      title: "Autospurgo Anghiari",
      phoneNumbers: [
        {
          label: "Tel.: 0575/520447",
          href: "tel:0575520447",
        },
        {
          label: "Cell.: 334 3889878",
          href: "tel:3343889878",
        },
      ],
      content:
        "La nostra azienda è dotata di VIDEOCAMERA ROBOTIZZATA per ispezionare le fognature, scarichi e fosse biologiche difficilmente raggiungibili con altri mezzi, permettendoci di risolvere ogni problematica inerente lo Autospurgo Anghiari dei nostri clienti in tempi brevi.",
      images: [
        {
          src: "https://www.maggi-mariano.it/immagini/misc/Telecamera-5-1-1.jpg",
          alt: "Image1",
        },
        {
          src: "https://www.maggi-mariano.it/immagini/misc/Telecamera-14-1-1.jpg",
          alt: "Image2",
        },
      ],
      formTitle:
        "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
      variant: "horizontal",
      imageDimensions: { width: 650, height: 850 },
    },
  },
};
