import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Agrigento",
  canonical: links.servizi["spurgo-pozzi-neri"]["agrigento"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
