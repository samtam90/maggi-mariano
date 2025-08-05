import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fratta Todina",
  canonical: links.servizi["disidratazione-fanghi"]["fratta-todina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fratta Todina",
  locationNames: { label: "Fratta Todina", href: "fratta-todina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
