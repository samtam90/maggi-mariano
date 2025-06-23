import React from "react";
import DocumentsTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/Documents",
  component: DocumentsTemplate,
};

const T = (args) => (
  <AppThemeProvider>
    <DocumentsTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  sections: {},
};
