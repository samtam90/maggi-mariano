import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Poggibonsi",
  canonical: links.servizi["disidratazione-fanghi"]["poggibonsi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Poggibonsi",
  locationNames: { label: "Poggibonsi", href: "poggibonsi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
