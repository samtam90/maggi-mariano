import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Casciano dei Bagni",
  canonical: links.servizi["spurgo-fosse-biologiche"]["san-casciano-dei-bagni"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Casciano dei Bagni", 
    locationNames: {label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
