import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Dovadola",
  canonical: links.servizi["spurgo-pozzi-neri"]["dovadola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Dovadola", 
    locationNames: {label: "Dovadola", href: "dovadola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
