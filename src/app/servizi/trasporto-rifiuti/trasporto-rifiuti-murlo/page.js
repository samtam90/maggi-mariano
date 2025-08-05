import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Murlo",
  canonical: links.servizi["trasporto-rifiuti"]["murlo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Murlo", 
    locationNames: {label: "Murlo", href: "murlo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
