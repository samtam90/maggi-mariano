import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Città di Castello",
  canonical: links.servizi["noleggio-bagni-chimici"]["città-di-castello"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Città di Castello",
  locationNames: { label: "Città di Castello", href: "città-di-castello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
