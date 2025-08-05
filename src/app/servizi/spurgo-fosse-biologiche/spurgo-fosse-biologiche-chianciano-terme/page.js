import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Chianciano Terme",
  canonical: links.servizi["spurgo-fosse-biologiche"]["chianciano-terme"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Chianciano Terme", 
    locationNames: {label: "Chianciano Terme", href: "chianciano-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
