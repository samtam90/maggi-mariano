import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Prato",
  canonical: links.servizi["spurgo-pozzi-neri"]["prato"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Prato", 
    locationNames: {label: "Prato", href: "prato"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
