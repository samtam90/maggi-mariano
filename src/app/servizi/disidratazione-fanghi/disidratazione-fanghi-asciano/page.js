import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Asciano",
  canonical: links.servizi["disidratazione-fanghi"]["asciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Asciano",
  locationNames: { label: "Asciano", href: "asciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
