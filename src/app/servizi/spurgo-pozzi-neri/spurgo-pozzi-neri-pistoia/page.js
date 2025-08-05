import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pistoia",
  canonical: links.servizi["spurgo-pozzi-neri"]["pistoia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
