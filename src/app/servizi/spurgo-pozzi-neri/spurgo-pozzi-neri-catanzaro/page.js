import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Catanzaro",
  canonical: links.servizi["spurgo-pozzi-neri"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
