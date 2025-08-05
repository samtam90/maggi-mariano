import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cesenatico",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cesenatico"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cesenatico", 
    locationNames: {label: "Cesenatico", href: "cesenatico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
