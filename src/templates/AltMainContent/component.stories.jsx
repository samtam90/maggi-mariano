import React from "react";
import AltMainContentTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/AltMainContent",
  component: AltMainContentTemplate,
};

const T = (args) => (
  <AppThemeProvider>
    <AltMainContentTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  sections: {},
};
