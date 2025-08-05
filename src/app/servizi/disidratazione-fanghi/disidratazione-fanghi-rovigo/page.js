import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rovigo",
  canonical: links.servizi["disidratazione-fanghi"]["rovigo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rovigo",
  locationNames: { label: "Rovigo", href: "rovigo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
