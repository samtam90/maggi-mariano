import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Santa Sofia",
  canonical: links.servizi["spurgo-pozzi-neri"]["santa-sofia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Santa Sofia", 
    locationNames: {label: "Santa Sofia", href: "santa-sofia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
