import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Asciano",
  canonical: links.servizi["trasporto-rifiuti"]["asciano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Asciano", 
    locationNames: {label: "Asciano", href: "asciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
