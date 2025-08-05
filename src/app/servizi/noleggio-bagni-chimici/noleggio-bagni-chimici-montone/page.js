import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montone",
  canonical: links.servizi["noleggio-bagni-chimici"]["montone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montone",
  locationNames: { label: "Montone", href: "montone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
