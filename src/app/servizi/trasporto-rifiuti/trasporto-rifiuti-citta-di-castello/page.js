import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Città di Castello",
  canonical: links.servizi["trasporto-rifiuti"]["citta-di-castello"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Città di Castello", 
    locationNames: {label: "Città di Castello", href: "citta-di-castello"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
