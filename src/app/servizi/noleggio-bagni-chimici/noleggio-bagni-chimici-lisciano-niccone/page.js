import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lisciano Niccone",
  canonical: links.servizi["noleggio-bagni-chimici"]["lisciano-niccone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lisciano Niccone",
  locationNames: { label: "Lisciano Niccone", href: "lisciano-niccone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
