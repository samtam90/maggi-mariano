import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Radda in Chianti",
  canonical: links.servizi["trasporto-acqua"]["radda-in-chianti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Radda in Chianti", 
    locationNames: {label: "Radda in Chianti", href: "radda-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
