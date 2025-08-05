import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foggia",
  canonical: links.servizi["spurgo-pozzi-neri"]["foggia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foggia", 
    locationNames: {label: "Foggia", href: "foggia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
