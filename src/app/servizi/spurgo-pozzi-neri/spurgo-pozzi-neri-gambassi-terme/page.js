import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gambassi Terme",
  canonical: links.servizi["spurgo-pozzi-neri"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
