import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Siena",
  canonical: links.servizi["spurgo-fosse-biologiche"]["siena"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Siena", 
    locationNames: {label: "Siena", href: "siena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
