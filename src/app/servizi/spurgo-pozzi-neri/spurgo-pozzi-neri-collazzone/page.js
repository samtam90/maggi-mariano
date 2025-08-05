import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Collazzone",
  canonical: links.servizi["spurgo-pozzi-neri"]["collazzone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
