import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vicenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vicenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
