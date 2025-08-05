import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Mauro Pascoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-mauro-pascoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Mauro Pascoli", 
    locationNames: {label: "San Mauro Pascoli", href: "san-mauro-pascoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
