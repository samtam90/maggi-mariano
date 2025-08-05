import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Modena",
  canonical: links.servizi["spurgo-pozzi-neri"]["modena"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Modena", 
    locationNames: {label: "Modena", href: "modena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["modena"],
      name: "Modena",
  }),
});
