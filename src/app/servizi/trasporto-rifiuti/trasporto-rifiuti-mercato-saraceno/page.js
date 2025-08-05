import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Mercato Saraceno",
  canonical: links.servizi["trasporto-rifiuti"]["mercato-saraceno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Mercato Saraceno", 
    locationNames: {label: "Mercato Saraceno", href: "mercato-saraceno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
