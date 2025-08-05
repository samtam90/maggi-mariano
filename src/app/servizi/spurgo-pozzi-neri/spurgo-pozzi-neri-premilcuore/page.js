import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Premilcuore",
  canonical: links.servizi["spurgo-pozzi-neri"]["premilcuore"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Premilcuore", 
    locationNames: {label: "Premilcuore", href: "premilcuore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
