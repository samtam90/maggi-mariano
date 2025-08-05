import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gubbio",
  canonical: links.servizi["noleggio-bagni-chimici"]["gubbio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gubbio",
  locationNames: { label: "Gubbio", href: "gubbio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
