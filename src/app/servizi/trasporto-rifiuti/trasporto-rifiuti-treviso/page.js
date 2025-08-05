import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Treviso",
  canonical: links.servizi["trasporto-rifiuti"]["treviso"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Treviso", 
    locationNames: {label: "Treviso", href: "treviso"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});
