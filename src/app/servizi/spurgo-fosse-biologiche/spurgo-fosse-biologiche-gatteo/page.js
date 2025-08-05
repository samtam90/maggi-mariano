import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gatteo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gatteo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gatteo", 
    locationNames: {label: "Gatteo", href: "gatteo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
