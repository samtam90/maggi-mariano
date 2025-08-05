import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castellina in Chianti",
  canonical: links.servizi["spurgo-pozzi-neri"]["castellina-in-chianti"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castellina in Chianti", 
    locationNames: {label: "Castellina in Chianti", href: "castellina-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
