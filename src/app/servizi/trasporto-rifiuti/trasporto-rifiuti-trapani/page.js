import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trapani",
  canonical: links.servizi["trasporto-rifiuti"]["trapani"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trapani", 
    locationNames: {label: "Trapani", href: "trapani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
