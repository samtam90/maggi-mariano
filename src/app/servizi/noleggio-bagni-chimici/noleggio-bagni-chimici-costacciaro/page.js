import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Costacciaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["costacciaro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Costacciaro",
  locationNames: { label: "Costacciaro", href: "costacciaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
