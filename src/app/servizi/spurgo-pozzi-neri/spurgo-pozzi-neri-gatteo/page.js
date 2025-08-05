import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gatteo",
  canonical: links.servizi["spurgo-pozzi-neri"]["gatteo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gatteo", 
    locationNames: {label: "Gatteo", href: "gatteo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
