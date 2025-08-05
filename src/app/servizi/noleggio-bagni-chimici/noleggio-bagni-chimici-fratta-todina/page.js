import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fratta Todina",
  canonical: links.servizi["noleggio-bagni-chimici"]["fratta-todina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fratta Todina",
  locationNames: { label: "Fratta Todina", href: "fratta-todina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
