import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Venezia",
  canonical: links.servizi["disidratazione-fanghi"]["venezia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Venezia",
  locationNames: { label: "Venezia", href: "venezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
