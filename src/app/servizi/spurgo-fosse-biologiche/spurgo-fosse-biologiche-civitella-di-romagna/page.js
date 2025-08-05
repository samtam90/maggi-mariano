import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Civitella di Romagna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["civitella-di-romagna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Civitella di Romagna", 
    locationNames: {label: "Civitella di Romagna", href: "civitella-di-romagna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
