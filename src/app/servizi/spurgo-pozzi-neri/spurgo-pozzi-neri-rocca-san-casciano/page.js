import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rocca San Casciano",
  canonical: links.servizi["spurgo-pozzi-neri"]["rocca-san-casciano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rocca San Casciano", 
    locationNames: {label: "Rocca San Casciano", href: "rocca-san-casciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
