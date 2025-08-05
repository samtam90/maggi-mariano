import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Mercato Saraceno",
  canonical: links.servizi["trasporto-acqua"]["mercato-saraceno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Mercato Saraceno", 
    locationNames: {label: "Mercato Saraceno", href: "mercato-saraceno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
