import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Trapani",
  canonical: links.servizi["disidratazione-fanghi"]["trapani"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Trapani",
  locationNames: { label: "Trapani", href: "trapani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
