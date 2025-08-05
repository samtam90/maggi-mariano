import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rapolano Terme",
  canonical: links.servizi["spurgo-pozzi-neri"]["rapolano-terme"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rapolano Terme", 
    locationNames: {label: "Rapolano Terme", href: "rapolano-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
