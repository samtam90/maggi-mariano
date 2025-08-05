import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monteroni d'Arbia",
  canonical: links.servizi["trasporto-rifiuti"]["monteroni-d-arbia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monteroni d'Arbia", 
    locationNames: {label: "Monteroni d'Arbia", href: "monteroni-d-arbia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
