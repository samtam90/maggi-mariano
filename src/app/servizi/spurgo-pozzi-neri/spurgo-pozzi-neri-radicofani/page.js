import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Radicofani",
  canonical: links.servizi["spurgo-pozzi-neri"]["radicofani"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Radicofani", 
    locationNames: {label: "Radicofani", href: "radicofani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
