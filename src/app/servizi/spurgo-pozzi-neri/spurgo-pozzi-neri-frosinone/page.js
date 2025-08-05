import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Frosinone",
  canonical: links.servizi["spurgo-pozzi-neri"]["frosinone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
