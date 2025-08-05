import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Calvi dell'Umbria",
  canonical: links.servizi["noleggio-bagni-chimici"]["calvi-dell-umbria"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Calvi dell'Umbria",
  locationNames: { label: "Calvi dell'Umbria", href: "calvi-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
