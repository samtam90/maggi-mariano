import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rocca San Casciano",
  canonical: links.servizi["trasporto-rifiuti"]["rocca-san-casciano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rocca San Casciano", 
    locationNames: {label: "Rocca San Casciano", href: "rocca-san-casciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
