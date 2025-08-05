import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Poggibonsi",
  canonical: links.servizi["spurgo-pozzi-neri"]["poggibonsi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Poggibonsi", 
    locationNames: {label: "Poggibonsi", href: "poggibonsi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
