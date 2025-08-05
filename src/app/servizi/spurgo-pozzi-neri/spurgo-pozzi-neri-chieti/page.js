import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chieti",
  canonical: links.servizi["spurgo-pozzi-neri"]["chieti"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chieti", 
    locationNames: {label: "Chieti", href: "chieti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
