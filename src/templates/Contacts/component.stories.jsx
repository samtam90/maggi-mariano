import React from "react";
import ContactsTemplate from ".";
import AppThemeProvider from "../../components/AppThemeProvider";
import Icons from "../../components/Icons";

export default {
  title: "Templates/Contacts",
  component: ContactsTemplate,
  argTypes: {
    onContactFormSubmit: {
      action: "onContactFormSubmit",
      table: { disable: true },
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <ContactsTemplate {...args} />
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  mobile: false,
  formTitle: "Usa il modulo sottostante per contattarci",
  title: { left: "Maggi mariano", right: "servizi ecologici" },
  items: [
    {
      title: "sede poppi",
      subtitle: "Via Aretina 16, 52014 Ponte a Poppi - (AR)",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "sede arezzo",
      subtitle: "SS679, 52100 Arezzo (AR)",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "assistenza clienti",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "rifiuti liquidi",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "rifiuti solidi",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "fax",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "email",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
    {
      title: "P.I. e C.F.",
      subtitle: "+39 0575 520447",
      href: "https://www.google.it",
      icon: <Icons.Phone />,
    },
  ],
};
