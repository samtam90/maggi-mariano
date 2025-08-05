import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Torrita di Siena",
  canonical: links.servizi["noleggio-bagni-chimici"]["torrita-di-siena"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Torrita di Siena",
  locationNames: { label: "Torrita di Siena", href: "torrita-di-siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
