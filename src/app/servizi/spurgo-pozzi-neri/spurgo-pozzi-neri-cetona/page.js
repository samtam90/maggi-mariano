import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cetona",
  canonical: links.servizi["spurgo-pozzi-neri"]["cetona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cetona", 
    locationNames: {label: "Cetona", href: "cetona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
