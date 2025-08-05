import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Agrigento",
  canonical: links.servizi["trasporto-rifiuti"]["agrigento"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
