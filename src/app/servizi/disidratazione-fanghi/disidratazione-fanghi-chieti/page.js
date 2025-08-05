import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Chieti",
  canonical: links.servizi["disidratazione-fanghi"]["chieti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Chieti",
  locationNames: { label: "Chieti", href: "chieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
