import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Savignano sul Rubicone",
  canonical: links.servizi["spurgo-pozzi-neri"]["savignano-sul-rubicone"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Savignano sul Rubicone", 
    locationNames: {label: "Savignano sul Rubicone", href: "savignano-sul-rubicone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
