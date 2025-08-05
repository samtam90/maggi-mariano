import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vercelli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vercelli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
