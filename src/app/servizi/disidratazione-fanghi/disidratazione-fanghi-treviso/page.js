import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Treviso",
  canonical: links.servizi["disidratazione-fanghi"]["treviso"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Treviso",
  locationNames: { label: "Treviso", href: "treviso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});
