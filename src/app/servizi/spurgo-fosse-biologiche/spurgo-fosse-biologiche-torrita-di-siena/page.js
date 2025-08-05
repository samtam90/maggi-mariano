import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Torrita di Siena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["torrita-di-siena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Torrita di Siena", 
    locationNames: {label: "Torrita di Siena", href: "torrita-di-siena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
