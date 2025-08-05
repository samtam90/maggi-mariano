import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Civitella di Romagna",
  canonical: links.servizi["spurgo-pozzi-neri"]["civitella-di-romagna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Civitella di Romagna", 
    locationNames: {label: "Civitella di Romagna", href: "civitella-di-romagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
