import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trequanda",
  canonical: links.servizi["trasporto-rifiuti"]["trequanda"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trequanda", 
    locationNames: {label: "Trequanda", href: "trequanda"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
