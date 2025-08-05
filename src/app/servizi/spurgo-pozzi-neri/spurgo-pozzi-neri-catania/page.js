import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Catania",
  canonical: links.servizi["spurgo-pozzi-neri"]["catania"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Catania", 
    locationNames: {label: "Catania", href: "catania"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
