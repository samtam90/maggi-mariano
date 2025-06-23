import Splash from ".";
import appConfig from "../../../app.config";

export default {
  component: Splash,
  title: "Splash",
};

const T = (args) => <Splash {...args} />;

export const Base = T.bind({});
Base.args = {
  alt: "Maggi Mariano",
  src: appConfig.misc.logoSrc,
};
