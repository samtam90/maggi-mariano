import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua San Quirico d'Orcia",
  canonical: links.servizi["trasporto-acqua"]["san-quirico-d-orcia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Quirico d'Orcia", 
    locationNames: {label: "San Quirico d'Orcia", href: "san-quirico-d-orcia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
