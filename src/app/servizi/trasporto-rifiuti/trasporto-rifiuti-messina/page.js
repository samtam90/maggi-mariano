import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Messina",
  canonical: links.servizi["trasporto-rifiuti"]["messina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Messina", 
    locationNames: {label: "Messina", href: "messina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
