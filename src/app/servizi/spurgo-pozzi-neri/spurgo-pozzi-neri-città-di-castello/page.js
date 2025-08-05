import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Città di Castello",
  canonical: links.servizi["spurgo-pozzi-neri"]["città-di-castello"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Città di Castello", 
    locationNames: {label: "Città di Castello", href: "città-di-castello"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
