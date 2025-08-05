import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Città di Castello",
  canonical: links.servizi["frantoio-mobile-inerti"]["citta-di-castello"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Città di Castello",
  locationNames: { label: "Città di Castello", href: "citta-di-castello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
