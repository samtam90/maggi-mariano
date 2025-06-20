import React from "react";
import LocationsGrid from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: LocationsGrid,
  title: "LocationsGrid",
};

const T = (args) => (
  <AppThemeProvider>
    <LocationsGrid {...args} classNames={{ root: "py-12" }} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  items: Array.from({ length: 24 }).map((v, i) => ({
    label: `Element ${i + 1}`,
    href: "https://www.google.it",
  })),
  title: (
    <span>
      Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutti i
      comuni della provincia di arezzo
    </span>
  ),
};
