import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Murlo",
  canonical: links.servizi["disidratazione-fanghi"]["murlo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Murlo",
  locationNames: { label: "Murlo", href: "murlo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
