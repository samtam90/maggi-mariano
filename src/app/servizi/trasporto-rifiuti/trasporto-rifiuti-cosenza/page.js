import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cosenza",
  canonical: links.servizi["trasporto-rifiuti"]["cosenza"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
