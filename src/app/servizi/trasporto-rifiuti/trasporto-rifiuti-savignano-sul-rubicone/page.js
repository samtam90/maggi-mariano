import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Savignano sul Rubicone",
  canonical: links.servizi["trasporto-rifiuti"]["savignano-sul-rubicone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Savignano sul Rubicone", 
    locationNames: {label: "Savignano sul Rubicone", href: "savignano-sul-rubicone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
