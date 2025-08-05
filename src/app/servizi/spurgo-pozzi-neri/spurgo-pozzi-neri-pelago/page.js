import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pelago",
  canonical: links.servizi["spurgo-pozzi-neri"]["pelago"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pelago", 
    locationNames: {label: "Pelago", href: "pelago"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
