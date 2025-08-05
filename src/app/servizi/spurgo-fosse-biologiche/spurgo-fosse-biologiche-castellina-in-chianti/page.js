import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castellina in Chianti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castellina-in-chianti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castellina in Chianti", 
    locationNames: {label: "Castellina in Chianti", href: "castellina-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
