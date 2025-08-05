import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pescara",
  canonical: links.servizi["trasporto-rifiuti"]["pescara"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pescara", 
    locationNames: {label: "Pescara", href: "pescara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
