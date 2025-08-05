import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Radda in Chianti",
  canonical: links.servizi["trasporto-rifiuti"]["radda-in-chianti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Radda in Chianti", 
    locationNames: {label: "Radda in Chianti", href: "radda-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
