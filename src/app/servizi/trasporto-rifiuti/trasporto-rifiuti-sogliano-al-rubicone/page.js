import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sogliano al Rubicone",
  canonical: links.servizi["trasporto-rifiuti"]["sogliano-al-rubicone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sogliano al Rubicone", 
    locationNames: {label: "Sogliano al Rubicone", href: "sogliano-al-rubicone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
