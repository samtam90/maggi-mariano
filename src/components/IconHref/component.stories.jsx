import React from "react";
import IconHref from ".";
import AppThemeProvider from "../AppThemeProvider";
import Icons from "../Icons";

export default {
  component: IconHref,
  title: "IconHref",
};

function Wrapper({ children }) {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}

const T = (args) => (
  <AppThemeProvider>
    <Wrapper>
      <IconHref {...args} />
    </Wrapper>
  </AppThemeProvider>
);

const TMulti = (args) => (
  <AppThemeProvider>
    <Wrapper>
      <ul className="flex">
        {args.items.map((item, index) => (
          <li key={index} className="ml-2">
            <IconHref {...item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  </AppThemeProvider>
);

export const Base = T.bind({});
export const Multi = TMulti.bind({});

Base.args = {
  icon: <Icons.Phone />,
  href: "https://www.google.it",
  label: "lol",
};

Multi.args = {
  items: [
    {
      icon: <Icons.Phone />,
      href: "https://www.google.it",
      label: "lol",
    },
    {
      icon: <Icons.Phone />,
      href: "https://www.google.it",
      label: "lol",
    },
    {
      icon: <Icons.Phone />,
      href: "https://www.google.it",
      label: "lol",
    },
  ],
};
