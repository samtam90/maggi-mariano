import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua San Casciano dei Bagni",
  canonical: links.servizi["trasporto-acqua"]["san-casciano-dei-bagni"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Casciano dei Bagni", 
    locationNames: {label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
