import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Treviso",
  canonical: links.servizi["spurgo-pozzi-neri"]["treviso"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Treviso", 
    locationNames: {label: "Treviso", href: "treviso"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});
