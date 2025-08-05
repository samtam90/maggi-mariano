import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chiusdino",
  canonical: links.servizi["disidratazione-fanghi"]["chiusdino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chiusdino",
  locationNames: { label: "Chiusdino", href: "chiusdino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
