import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valfabbrica",
  canonical: links.servizi["noleggio-bagni-chimici"]["valfabbrica"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Valfabbrica",
  locationNames: { label: "Valfabbrica", href: "valfabbrica" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
