import { getBaseLocationsData } from "@/misc/pages";
import {
  getBaseProps as getExternalBaseProps,
  getMetadata,
} from "../centrifugazione-fanghi/page";
import appConfig from "../../../../app.config";
import { withBaseProps as withExternalBaseProps } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi",
  canonicalLink: appConfig.links.servizi["disidratazione-fanghi"].root,
});

function getBaseProps({ title, locationsData, mobile }) {
  return getExternalBaseProps({
    mobile,
    title,
    locationsData:
      locationsData ||
      getBaseLocationsData({
        links: appConfig.links.servizi["disidratazione-fanghi"],
        serviceName: "disidratazione fanghi",
      }),
  });
}

export function withBaseProps({ title, locationsData, locationNames }) {
  return withExternalBaseProps({
    title,
    locationNames,
    locationsData,
    Components: {
      Mobile: import("@/templates/MainContent/alt/mobile"),
      Desktop: import("@/templates/MainContent/alt/desktop"),
    },
    getBaseProps,
  });
}

export { getMetadata };
export default withBaseProps({ title: "Disidratazione fanghi" });
