import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bastia Umbra",
  canonical: links.servizi["spurgo-pozzi-neri"]["bastia-umbra"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
