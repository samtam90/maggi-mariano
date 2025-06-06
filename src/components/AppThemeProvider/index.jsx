import { components } from "@italwebcom/tailwind-components";

const { ThemeProvider } = components;

const fonts = {
  titleBold: "MontserratBold",
  title: "Montserrat",
  subtitle: "MontserratBold",
  content: "Roboto",
};

const args = {
  fonts,
  settings: {
    placeholderColorTransitionTiming: 1000,
  },
};

export { fonts };
export default function AppThemeProvider({ children }) {
  return <ThemeProvider args={args}>{children}</ThemeProvider>;
}
export function InnerThemeProvider({ children, fonts }) {
  const actualArgs = { ...args, fonts: { ...args.fonts, ...fonts } };
  return <ThemeProvider args={actualArgs}>{children}</ThemeProvider>;
}
