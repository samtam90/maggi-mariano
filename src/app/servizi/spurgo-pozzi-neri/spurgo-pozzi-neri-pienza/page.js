import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pienza",
  canonical: links.servizi["spurgo-pozzi-neri"]["pienza"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pienza", 
    locationNames: {label: "Pienza", href: "pienza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
