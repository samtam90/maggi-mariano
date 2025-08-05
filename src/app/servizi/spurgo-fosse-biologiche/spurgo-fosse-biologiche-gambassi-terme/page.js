import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gambassi Terme",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gambassi-terme"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
