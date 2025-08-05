import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sogliano al Rubicone",
  canonical: links.servizi["spurgo-pozzi-neri"]["sogliano-al-rubicone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sogliano al Rubicone", 
    locationNames: {label: "Sogliano al Rubicone", href: "sogliano-al-rubicone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
