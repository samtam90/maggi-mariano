import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Verghereto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["verghereto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Verghereto", 
    locationNames: {label: "Verghereto", href: "verghereto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
