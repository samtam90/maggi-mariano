import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vercelli",
  canonical: links.servizi["spurgo-pozzi-neri"]["vercelli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
