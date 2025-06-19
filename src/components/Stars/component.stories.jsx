import React from "react";
import Stars from ".";
import AppThemeProvider from "../AppThemeProvider";

export default {
  component: Stars,
  title: "Stars",
};

const T = (args) => (
  <AppThemeProvider>
    <Stars className="text-lg lg:text-xl" label="3 stars">
      <Stars.Star filled key={1} />
      <Stars.Star filled key={2} />
      <Stars.Star filled key={3} />
      <Stars.Star key={4} />
      <Stars.Star key={5} />
    </Stars>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {};
