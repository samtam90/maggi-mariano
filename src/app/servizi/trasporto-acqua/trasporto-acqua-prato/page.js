import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Prato",
  canonical: links.servizi["trasporto-acqua"]["prato"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Prato", 
    locationNames: {label: "Prato", href: "prato"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
