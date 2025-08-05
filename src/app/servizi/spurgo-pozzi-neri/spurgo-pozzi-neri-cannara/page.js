import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cannara",
  canonical: links.servizi["spurgo-pozzi-neri"]["cannara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cannara", 
    locationNames: {label: "Cannara", href: "cannara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
