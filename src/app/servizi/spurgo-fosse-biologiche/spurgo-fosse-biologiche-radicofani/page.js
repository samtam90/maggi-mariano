import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Radicofani",
  canonical: links.servizi["spurgo-fosse-biologiche"]["radicofani"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Radicofani", 
    locationNames: {label: "Radicofani", href: "radicofani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
