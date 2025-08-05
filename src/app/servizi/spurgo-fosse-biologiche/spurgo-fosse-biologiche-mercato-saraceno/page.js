import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Mercato Saraceno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["mercato-saraceno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Mercato Saraceno", 
    locationNames: {label: "Mercato Saraceno", href: "mercato-saraceno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
