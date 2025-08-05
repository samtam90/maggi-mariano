import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gambettola",
  canonical: links.servizi["spurgo-pozzi-neri"]["gambettola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gambettola", 
    locationNames: {label: "Gambettola", href: "gambettola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
