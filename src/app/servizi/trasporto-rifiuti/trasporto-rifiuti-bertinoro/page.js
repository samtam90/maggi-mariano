import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bertinoro",
  canonical: links.servizi["trasporto-rifiuti"]["bertinoro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bertinoro", 
    locationNames: {label: "Bertinoro", href: "bertinoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
