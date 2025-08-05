import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sarsina",
  canonical: links.servizi["spurgo-pozzi-neri"]["sarsina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sarsina", 
    locationNames: {label: "Sarsina", href: "sarsina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
