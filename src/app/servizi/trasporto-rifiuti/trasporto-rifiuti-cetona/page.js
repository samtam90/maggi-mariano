import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Cetona",
  canonical: links.servizi["trasporto-rifiuti"]["cetona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Cetona", 
    locationNames: {label: "Cetona", href: "cetona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
