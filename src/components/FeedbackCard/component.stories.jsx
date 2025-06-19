import React from "react";
import FeedbackCard from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: FeedbackCard,
  title: "FeedbackCard",
};

const T = (args) => (
  <AppThemeProvider>
    <div className="h-screen bg-gray-50 content-center">
      <FeedbackCard {...args} classNames={{ root: "max-w-3xl mx-auto" }} />
    </div>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  title: "Simone Soldani",
  subtitle: "I am a useless subtitle",
  stars: { total: 5, filled: 5 },
  icon: <div className="h-8 w-8 rounded-full bg-red-primary"></div>,
  content:
    "Sono rimasto colpito dalla tempestività della intervento  da parte dell azienda, e della professionalità  dell operatore.bisogno, li richiamerei sicuramente.",
};
