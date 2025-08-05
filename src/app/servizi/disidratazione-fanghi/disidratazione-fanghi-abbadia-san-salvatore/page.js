import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Abbadia San Salvatore",
  canonical: links.servizi["disidratazione-fanghi"]["abbadia-san-salvatore"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Abbadia San Salvatore",
  locationNames: { label: "Abbadia San Salvatore", href: "abbadia-san-salvatore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
