import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Prato",
  canonical: links.servizi["trasporto-rifiuti"]["prato"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Prato", 
    locationNames: {label: "Prato", href: "prato"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
