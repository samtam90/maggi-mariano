import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Siena",
  canonical: links.servizi["disidratazione-fanghi"]["siena"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Siena",
  locationNames: { label: "Siena", href: "siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
