import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pescara",
  canonical: links.servizi["spurgo-pozzi-neri"]["pescara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pescara", 
    locationNames: {label: "Pescara", href: "pescara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
