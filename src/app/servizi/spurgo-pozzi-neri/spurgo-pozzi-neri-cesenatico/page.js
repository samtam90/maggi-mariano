import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cesenatico",
  canonical: links.servizi["spurgo-pozzi-neri"]["cesenatico"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cesenatico", 
    locationNames: {label: "Cesenatico", href: "cesenatico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
