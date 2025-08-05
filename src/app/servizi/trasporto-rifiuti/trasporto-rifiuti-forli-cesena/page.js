import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Forlì-Cesena",
  canonical: links.servizi["trasporto-rifiuti"]["forli-cesena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì-Cesena",
  }),
});
