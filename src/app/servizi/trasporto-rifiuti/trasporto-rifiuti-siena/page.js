import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Siena",
  canonical: links.servizi["trasporto-rifiuti"]["siena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Siena", 
    locationNames: {label: "Siena", href: "siena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
