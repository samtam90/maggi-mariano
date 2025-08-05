import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gambettola",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gambettola"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gambettola", 
    locationNames: {label: "Gambettola", href: "gambettola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
