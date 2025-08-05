import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri La Spezia",
  canonical: links.servizi["spurgo-pozzi-neri"]["la-spezia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});
