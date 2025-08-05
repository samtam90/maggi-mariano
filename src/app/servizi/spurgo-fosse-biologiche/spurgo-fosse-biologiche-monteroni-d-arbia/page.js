import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monteroni d'Arbia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monteroni-d-arbia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monteroni d'Arbia", 
    locationNames: {label: "Monteroni d'Arbia", href: "monteroni-d-arbia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
