import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Torrita di Siena",
  canonical: links.servizi["trasporto-rifiuti"]["torrita-di-siena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Torrita di Siena", 
    locationNames: {label: "Torrita di Siena", href: "torrita-di-siena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
