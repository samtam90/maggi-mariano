import React from "react";
import EmbeddedMap from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: EmbeddedMap,
  title: "EmbeddedMap",
};

const T = (args) => (
  <AppThemeProvider>
    <EmbeddedMap {...args} />
  </AppThemeProvider>
);

const TMulti = (args) => (
  <AppThemeProvider>
    <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
      <EmbeddedMap {...args.left} />
      <EmbeddedMap {...args.right} />
    </div>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  title: { left: "Sede", right: "Poppi" },
  subtitle: "Servizi ecologici",
  dimensions: { width: 550, height: 350 },
  src: "https://maps.google.com/maps?q=Maggi%20Mariano%20Servizi%20Ecologici%20srl%2C%20Via%20Aretina%2C%2016%2C%2052014%20Poppi%20AR&t=m&z=14&output=embed&iwloc=near",
};

export const Multi = TMulti.bind({});
Multi.args = {
  left: {
    ...Base.args,
  },
  right: {
    ...Base.args,
    title: { left: "Sede", right: "Arezzo" },
    subtitle: "Autospurgo aretino",
  },
};
