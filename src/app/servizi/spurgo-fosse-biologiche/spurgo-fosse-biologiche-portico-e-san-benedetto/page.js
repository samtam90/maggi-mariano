import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Portico e San Benedetto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["portico-e-san-benedetto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Portico e San Benedetto", 
    locationNames: {label: "Portico e San Benedetto", href: "portico-e-san-benedetto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
