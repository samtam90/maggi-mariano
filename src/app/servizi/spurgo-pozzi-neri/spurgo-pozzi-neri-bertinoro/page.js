import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bertinoro",
  canonical: links.servizi["spurgo-pozzi-neri"]["bertinoro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bertinoro", 
    locationNames: {label: "Bertinoro", href: "bertinoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
