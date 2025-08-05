import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Firenze",
  canonical: links.servizi["spurgo-pozzi-neri"]["firenze"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Firenze", 
    locationNames: {label: "Firenze", href: "firenze"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
