import React from "react";
import SpecialText from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: SpecialText,
  title: "SpecialText",
};

const CapitalizedTemplate = (args) => (
  <AppThemeProvider>
    <div className="h-screen items-center content-center bg-green-dark">
      <SpecialText.Capitalized
        classNames={{ root: "max-w-2xl mx-auto", first: "h-[70px] py-0" }}
      >
        {args.text}
      </SpecialText.Capitalized>
    </div>
  </AppThemeProvider>
);

const CircledTemplate = (args) => (
  <AppThemeProvider>
    <div className="h-screen items-center content-center">
      <p className="font-titleBold text-2xl lg:text-3xl uppercase text-red-primary text-center">
        New: &nbsp;
        <SpecialText.Circled
          stroke={args.stroke}
          active={args.active}
          component="span"
          className="text-green-primary"
        >
          Frantoio mobile di inerti
        </SpecialText.Circled>
      </p>
    </div>
  </AppThemeProvider>
);

const UnderlinedTemplate = (args) => (
  <AppThemeProvider>
    <div className="h-screen items-center content-center">
      <p className="font-titleBold text-4xl lg:text-5xl uppercase text-red-primary text-center">
        New: &nbsp;
        <SpecialText.Underlined
          fill={args.fill}
          active={args.active}
          double={args.double}
          component="span"
          className="text-green-primary"
        >
          Frantoio mobile di inerti
        </SpecialText.Underlined>
      </p>
    </div>
  </AppThemeProvider>
);

export const Capitalized = CapitalizedTemplate.bind({});
Capitalized.args = {
  text: "Da oltre quarant'anni, la nostra azienda opera nel settore dei servizi ecologici, mettendo a disposizione delle industrie, dei privati e degli enti un valido supporto nella gestione dei rifiuti speciali e pericolosi. Grazie alla nostra vasta esperienza, siamo in grado di offrire servizi di alta qualità, che comprendono il ritiro, il trasporto e lo smaltimento o il recupero dei rifiuti, nonché lo svuotamento e lo spurgo di fosse biologiche, la stasatura delle condotte, le videoispezioni e la disidratazione dei fanghi di depurazione civili e industriali.",
};

export const Circled = CircledTemplate.bind({});
Circled.args = {
  active: false,
  stroke: "red",
};

export const Underlined = UnderlinedTemplate.bind({});
Underlined.args = {
  active: false,
  fill: "red",
  double: false,
};
