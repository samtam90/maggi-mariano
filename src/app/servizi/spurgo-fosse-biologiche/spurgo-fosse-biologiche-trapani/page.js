import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trapani",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trapani"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trapani", 
    locationNames: {label: "Trapani", href: "trapani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
