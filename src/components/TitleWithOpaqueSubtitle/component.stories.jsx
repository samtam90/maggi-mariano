import React from "react";
import TitleWithOpaqueSubtitle from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  title: "TitleWithOpaqueSubtitle",
  component: TitleWithOpaqueSubtitle,
};

const T = (args) => (
  <AppThemeProvider>
    <TitleWithOpaqueSubtitle {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
    title: {left: "Sede", right: "Arezzo"},
    subtitle: "Autospurgo aretino"
}