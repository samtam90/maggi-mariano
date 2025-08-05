import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fossato di Vico",
  canonical: links.servizi["noleggio-bagni-chimici"]["fossato-di-vico"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fossato di Vico",
  locationNames: { label: "Fossato di Vico", href: "fossato-di-vico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
