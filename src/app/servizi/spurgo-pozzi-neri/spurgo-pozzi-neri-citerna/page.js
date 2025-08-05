import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Citerna",
  canonical: links.servizi["spurgo-pozzi-neri"]["citerna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Citerna", 
    locationNames: {label: "Citerna", href: "citerna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
