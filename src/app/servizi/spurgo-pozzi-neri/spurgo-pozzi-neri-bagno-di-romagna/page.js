import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bagno di Romagna",
  canonical: links.servizi["spurgo-pozzi-neri"]["bagno-di-romagna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bagno di Romagna", 
    locationNames: {label: "Bagno di Romagna", href: "bagno-di-romagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
