import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Abbadia San Salvatore",
  canonical: links.servizi["trasporto-rifiuti"]["abbadia-san-salvatore"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Abbadia San Salvatore", 
    locationNames: {label: "Abbadia San Salvatore", href: "abbadia-san-salvatore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
