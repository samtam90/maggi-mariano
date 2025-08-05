import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ortignano Raggiolo",
  canonical: links.servizi["spurgo-pozzi-neri"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
