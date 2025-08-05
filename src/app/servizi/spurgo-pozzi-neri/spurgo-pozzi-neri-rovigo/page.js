import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rovigo",
  canonical: links.servizi["spurgo-pozzi-neri"]["rovigo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
