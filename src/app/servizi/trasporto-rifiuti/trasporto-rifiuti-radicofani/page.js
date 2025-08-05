import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Radicofani",
  canonical: links.servizi["trasporto-rifiuti"]["radicofani"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Radicofani", 
    locationNames: {label: "Radicofani", href: "radicofani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
