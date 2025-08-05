import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Costacciaro",
  canonical: links.servizi["centrifugazione-fanghi"]["costacciaro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Costacciaro",
  locationNames: { label: "Costacciaro", href: "costacciaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
