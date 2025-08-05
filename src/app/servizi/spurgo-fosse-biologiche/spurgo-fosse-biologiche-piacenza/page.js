import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piacenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["piacenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
