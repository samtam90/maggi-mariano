import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Forlimpopoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["forlimpopoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Forlimpopoli", 
    locationNames: {label: "Forlimpopoli", href: "forlimpopoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
