import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pontassieve",
  canonical: links.servizi["spurgo-pozzi-neri"]["pontassieve"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
