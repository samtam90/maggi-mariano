import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua San Mauro Pascoli",
  canonical: links.servizi["trasporto-acqua"]["san-mauro-pascoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua San Mauro Pascoli", 
    locationNames: {label: "San Mauro Pascoli", href: "san-mauro-pascoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
