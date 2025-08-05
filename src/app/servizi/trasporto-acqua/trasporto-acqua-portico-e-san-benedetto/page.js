import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Portico e San Benedetto",
  canonical: links.servizi["trasporto-acqua"]["portico-e-san-benedetto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Portico e San Benedetto", 
    locationNames: {label: "Portico e San Benedetto", href: "portico-e-san-benedetto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
