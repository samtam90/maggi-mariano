import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Poggibonsi",
  canonical: links.servizi["trasporto-rifiuti"]["poggibonsi"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Poggibonsi", 
    locationNames: {label: "Poggibonsi", href: "poggibonsi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
