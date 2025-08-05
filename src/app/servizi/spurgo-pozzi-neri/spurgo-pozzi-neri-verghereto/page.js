import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Verghereto",
  canonical: links.servizi["spurgo-pozzi-neri"]["verghereto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Verghereto", 
    locationNames: {label: "Verghereto", href: "verghereto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
