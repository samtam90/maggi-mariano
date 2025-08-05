import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foggia",
  canonical: links.servizi["trasporto-rifiuti"]["foggia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foggia", 
    locationNames: {label: "Foggia", href: "foggia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
