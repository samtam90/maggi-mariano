import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Foggia",
  canonical: links.servizi["trasporto-acqua"]["foggia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Foggia", 
    locationNames: {label: "Foggia", href: "foggia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
