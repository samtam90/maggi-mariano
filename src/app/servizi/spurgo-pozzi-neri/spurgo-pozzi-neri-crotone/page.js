import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Crotone",
  canonical: links.servizi["spurgo-pozzi-neri"]["crotone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Crotone", 
    locationNames: {label: "Crotone", href: "crotone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
