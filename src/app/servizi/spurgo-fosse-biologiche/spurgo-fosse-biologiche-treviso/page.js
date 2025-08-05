import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Treviso",
  canonical: links.servizi["spurgo-fosse-biologiche"]["treviso"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Treviso", 
    locationNames: {label: "Treviso", href: "treviso"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});
