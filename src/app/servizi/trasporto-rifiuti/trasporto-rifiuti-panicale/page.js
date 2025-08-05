import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Panicale",
  canonical: links.servizi["trasporto-rifiuti"]["panicale"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Panicale", 
    locationNames: {label: "Panicale", href: "panicale"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
