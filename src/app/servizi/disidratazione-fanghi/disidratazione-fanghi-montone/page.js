import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montone",
  canonical: links.servizi["disidratazione-fanghi"]["montone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montone",
  locationNames: { label: "Montone", href: "montone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
