import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Prato",
  canonical: links.servizi["disidratazione-fanghi"]["prato"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Prato",
  locationNames: { label: "Prato", href: "prato" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
