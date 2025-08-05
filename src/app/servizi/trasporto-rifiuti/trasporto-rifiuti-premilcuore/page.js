import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Premilcuore",
  canonical: links.servizi["trasporto-rifiuti"]["premilcuore"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Premilcuore", 
    locationNames: {label: "Premilcuore", href: "premilcuore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
