import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chiusi",
  canonical: links.servizi["disidratazione-fanghi"]["chiusi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chiusi",
  locationNames: { label: "Chiusi", href: "chiusi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
