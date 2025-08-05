import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Città della Pieve",
  canonical: links.servizi["noleggio-bagni-chimici"]["città-della-pieve"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Città della Pieve",
  locationNames: { label: "Città della Pieve", href: "città-della-pieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
