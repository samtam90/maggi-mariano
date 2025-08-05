import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castellina in Chianti",
  canonical: links.servizi["trasporto-rifiuti"]["castellina-in-chianti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castellina in Chianti", 
    locationNames: {label: "Castellina in Chianti", href: "castellina-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
