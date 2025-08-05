import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cannara",
  canonical: links.servizi["disidratazione-fanghi"]["cannara"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cannara",
  locationNames: { label: "Cannara", href: "cannara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
