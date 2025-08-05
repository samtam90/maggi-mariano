import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Premilcuore",
  canonical: links.servizi["spurgo-fosse-biologiche"]["premilcuore"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Premilcuore", 
    locationNames: {label: "Premilcuore", href: "premilcuore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
