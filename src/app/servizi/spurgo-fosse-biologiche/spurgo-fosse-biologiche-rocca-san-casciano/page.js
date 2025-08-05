import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rocca San Casciano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rocca-san-casciano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rocca San Casciano", 
    locationNames: {label: "Rocca San Casciano", href: "rocca-san-casciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
