import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Torino",
  canonical: links.servizi["spurgo-pozzi-neri"]["torino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Torino", 
    locationNames: {label: "Torino", href: "torino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
