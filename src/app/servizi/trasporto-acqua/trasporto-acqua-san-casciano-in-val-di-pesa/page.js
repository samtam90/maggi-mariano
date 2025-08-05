import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua San Casciano in Val di Pesa",
  canonical: links.servizi["trasporto-acqua"]["san-casciano-in-val-di-pesa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Casciano in Val di Pesa", 
    locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
