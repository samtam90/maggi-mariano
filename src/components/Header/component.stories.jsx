import React from "react";
import Header from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: Header,
  title: "Auxiliary/Header",
};

const T = (args) => (
  <AppThemeProvider>
    <Header {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  logoDimensions: {
    width: 175,
    height: 50,
  },
  mobile: false,
};
