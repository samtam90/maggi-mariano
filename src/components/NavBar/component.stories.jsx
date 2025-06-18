import React from "react";
import NavBar from ".";
import AppThemeProvider from "../AppThemeProvider";
import Icons from "../Icons";

export default {
  component: NavBar,
  title: "NavBar",
  argTypes: {
    maxWidth: {
      control: { type: "radio" },
      options: ["xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
    variant: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <NavBar
      variant={args.variant}
      maxWidth={args.maxWidth}
      disableNavElement={args.disableNavElement}
      classNames={{ root: "py-8" }}
    >
      {args.items.map(({ title, link, icon }) => (
        <NavBar.Item key={title} title={title} icon={icon} link={link} />
      ))}
    </NavBar>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  variant: "horizontal",
  maxWidth: "2xl",
  disableNavElement: false,
  items: [
    {
      title: "Assistenza Clienti",
      link: {
        href: "https://www.google.it",
        label: "+39 0575 520447",
      },
      icon: <Icons.Phone />,
    },
    {
      title: "Contatti",
      link: {
        href: "https://www.google.it",
        label: "serviziecologici@maggimariano.it",
      },
      icon: <Icons.Phone />,
    },
    {
      title: "Rifiuti Liquidi",
      link: {
        href: "https://www.google.it",
        label: "Cell.: +39 334 3889878",
      },
      icon: <Icons.Phone />,
    },
    {
      title: "Rifiuti Solidi",
      link: {
        href: "https://www.google.it",
        label: "Cell.: +39 334 3889878",
      },
      icon: <Icons.Phone />,
    },
  ],
};
