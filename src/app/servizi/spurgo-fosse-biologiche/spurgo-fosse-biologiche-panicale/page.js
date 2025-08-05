import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Panicale",
  canonical: links.servizi["spurgo-fosse-biologiche"]["panicale"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Panicale", 
    locationNames: {label: "Panicale", href: "panicale"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
