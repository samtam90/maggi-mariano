import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Abbadia San Salvatore",
  canonical: links.servizi["trasporto-acqua"]["abbadia-san-salvatore"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Abbadia San Salvatore", 
    locationNames: {label: "Abbadia San Salvatore", href: "abbadia-san-salvatore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
