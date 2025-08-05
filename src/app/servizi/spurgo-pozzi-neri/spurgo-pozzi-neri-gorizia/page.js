import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gorizia",
  canonical: links.servizi["spurgo-pozzi-neri"]["gorizia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
