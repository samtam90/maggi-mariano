import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ogliastra",
  canonical: links.servizi["trasporto-rifiuti"]["ogliastra"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
