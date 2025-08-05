import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Costacciaro",
  canonical: links.servizi["disidratazione-fanghi"]["costacciaro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Costacciaro",
  locationNames: { label: "Costacciaro", href: "costacciaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
