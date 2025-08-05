import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lisciano Niccone",
  canonical: links.servizi["disidratazione-fanghi"]["lisciano-niccone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lisciano Niccone",
  locationNames: { label: "Lisciano Niccone", href: "lisciano-niccone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
