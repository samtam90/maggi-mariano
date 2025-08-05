import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ragusa",
  canonical: links.servizi["spurgo-pozzi-neri"]["ragusa"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
