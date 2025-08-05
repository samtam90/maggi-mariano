import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Agrigento",
  canonical: links.servizi["trasporto-acqua"]["agrigento"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
