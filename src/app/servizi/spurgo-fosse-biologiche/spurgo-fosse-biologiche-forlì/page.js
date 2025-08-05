import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Forlì",
  canonical: links.servizi["spurgo-fosse-biologiche"]["forlì"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Forlì", 
    locationNames: {label: "Forlì", href: "forlì"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
