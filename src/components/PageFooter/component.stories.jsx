import React from "react";
import PageFooter from ".";
import AppThemeProvider from "../AppThemeProvider";
import Icons from "../Icons";
import IconHref from "../IconHref";

export default {
  component: PageFooter,
  title: "PageFooter",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
    },
    contentMaxWidth: {
      control: { type: "radio" },
      options: ["xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
  },
};

const T = (args) => (
  <AppThemeProvider>
    <PageFooter
      variant={args.variant}
      contentMaxWidth={args.contentMaxWidth}
      titleHeadingElement="h4"
      logo={args.logo}
      classNames={{ root: "py-8", section: { additionalContent: "mt-6" } }}
    >
      {args.sections.map(({ title, navItems, additionalContent }) => (
        <PageFooter.Section
          title={title}
          navItems={navItems}
          additionalContent={additionalContent}
        />
      ))}
    </PageFooter>
  </AppThemeProvider>
);

export const Base = T.bind({});
Base.args = {
  variant: "horizontal",
  contentMaxWidth: "6xl",
  logo: {
    src: "https://www.maggi-mariano.it/wp-content/uploads/2022/06/img0001.png",
    dimensions: { width: 175, height: 90 },
  },
  sections: [
    {
      title: "Maggi Mariano Servizi Ecologici SRL",
      navItems: [
        {
          title: "Via Aretina, 16",
          icon: <Icons.Phone />,
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Loc. San Giuliano snc",
          icon: <Icons.Phone />,
          link: {
            label: "52100 Arezzo (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Loc. San Giuliano snc",
          icon: <Icons.Phone />,
          link: {
            label: "52100 Arezzo (AR)",
            href: "https://www.google.it",
          },
        },
      ],
      additionalContent: (
        <ul className="flex items-center">
          {Array.from({ length: 3 }).map((v, i) => (
            <li key={i} className="mr-3">
              <IconHref
                href="https://www.google.it"
                label={i.toString()}
                icon={<Icons.Phone />}
              />
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "assistenza clienti",
      navItems: [
        {
          title: "Ufficio",
          icon: <Icons.Phone />,
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Rifiuti liquidi",
          icon: <Icons.Phone />,
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Rifiuti solidi",
          icon: <Icons.Phone />,
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Fax",
          icon: <Icons.Phone />,
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
        {
          title: "Email",
          icon: <Icons.Phone />,
          link: {
            label: "+39 0575 520447",
            href: "https://www.google.it",
          },
        },
      ],
    },
    {
      title: "Privacy",
      navItems: [
        {
          title: "Via Aretina, 16",
          icon: <Icons.Phone />,
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
        {
          title: "Via Aretina, 16",
          icon: <Icons.Phone />,
          link: {
            label: "52014 Ponte a Poppi (AR)",
            href: "https://www.google.it",
          },
        },
      ],
    },
  ],
};
