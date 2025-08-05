import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trapani",
  canonical: links.servizi["spurgo-pozzi-neri"]["trapani"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trapani", 
    locationNames: {label: "Trapani", href: "trapani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
