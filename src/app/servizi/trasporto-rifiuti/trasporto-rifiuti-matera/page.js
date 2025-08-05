import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Matera",
  canonical: links.servizi["trasporto-rifiuti"]["matera"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Matera", 
    locationNames: {label: "Matera", href: "matera"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
