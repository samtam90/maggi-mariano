import React from "react";
import PrivacySettingsPanel from ".";
import AppThemeProvider from "../../AppThemeProvider";

export default {
  title: "PrivacySettingsPanel",
  component: PrivacySettingsPanel,
  argTypes: {
    onClose: { action: "onClose", table: { disable: true } },
    variant: {
      options: ["drawer", "dialog"],
    },
    onChange: { action: "onChange", table: { disable: true } },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <PrivacySettingsPanel {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  variant: "dialog",
  title: "Impostazioni privacy",
  subtitle: "Maggi Mariano Servizi Ecologici",
  logo: {
    src: "https://www.maggi-mariano.it/wp-content/uploads/2022/05/logo-maggi.png",
    dimensions: { width: 100, height: 70 },
    alt: "Logo",
  },
  open: true,
  sections: [
    {
      title: "Cookie e storage policy",
      paragraphs: [
        "I siti Web possono memorizzare o recuperare informazioni sotto forma di cookie nel browser. Questi possono essere relativi ad informazioni statistiche anonime, informazioni sull’utente, le tue preferenze o dispositivi utilizzati per consentire un'esperienza web personalizzata o per migliorare l’esperienza di utilizzo del sito.",
        "Ti invitiamo a consultare la nostra privacy policy a questo link.",
      ],
    },
  ],
  settings: [
    {
      id: "essential_cookies",
      name: "Cookie essenziali",
      description:
        "I cookie strettamente necessari dovrebbero essere sempre attivati per poter salvare le tue preferenze per le impostazioni dei cookie.",
      disabled: true,
    },
    {
      id: "third_party_cookies",
      name: "Cookie di terze parti",
      description:
        "Questo sito utilizza Google Analytics 4 per raccogliere informazioni anonime come il numero di visitatori del sito e le pagine più popolari.",
    },
  ],
  defaultValues: {
    essential_cookies: "accepted",
  },
};
