import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Citerna",
  canonical: links.servizi["noleggio-bagni-chimici"]["citerna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Citerna",
  locationNames: { label: "Citerna", href: "citerna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
