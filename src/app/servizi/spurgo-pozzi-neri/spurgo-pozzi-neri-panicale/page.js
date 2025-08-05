import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Panicale",
  canonical: links.servizi["spurgo-pozzi-neri"]["panicale"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Panicale", 
    locationNames: {label: "Panicale", href: "panicale"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
