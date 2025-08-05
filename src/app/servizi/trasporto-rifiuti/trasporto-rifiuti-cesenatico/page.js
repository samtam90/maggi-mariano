import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cesenatico",
  canonical: links.servizi["trasporto-rifiuti"]["cesenatico"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cesenatico", 
    locationNames: {label: "Cesenatico", href: "cesenatico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
