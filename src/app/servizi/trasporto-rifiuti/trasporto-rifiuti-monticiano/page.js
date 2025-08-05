import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Monticiano",
  canonical: links.servizi["trasporto-rifiuti"]["monticiano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Monticiano", 
    locationNames: {label: "Monticiano", href: "monticiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
