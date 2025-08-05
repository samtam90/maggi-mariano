import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monteroni d'Arbia",
  canonical: links.servizi["disidratazione-fanghi"]["monteroni-d-arbia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monteroni d'Arbia",
  locationNames: { label: "Monteroni d'Arbia", href: "monteroni-d-arbia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
