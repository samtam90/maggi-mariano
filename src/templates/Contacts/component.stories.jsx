import React from "react";
import ContactsTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";

export default {
  title: "Templates/Contacts",
  component: ContactsTemplate,
};

const T = (args) => (
  <AppThemeProvider>
    <ContactsTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  sections: {},
};
