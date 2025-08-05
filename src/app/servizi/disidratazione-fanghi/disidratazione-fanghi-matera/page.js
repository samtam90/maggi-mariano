import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Matera",
  canonical: links.servizi["disidratazione-fanghi"]["matera"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Matera",
  locationNames: { label: "Matera", href: "matera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
