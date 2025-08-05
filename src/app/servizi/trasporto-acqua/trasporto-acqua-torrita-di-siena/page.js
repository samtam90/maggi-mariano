import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Torrita di Siena",
  canonical: links.servizi["trasporto-acqua"]["torrita-di-siena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Torrita di Siena", 
    locationNames: {label: "Torrita di Siena", href: "torrita-di-siena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
