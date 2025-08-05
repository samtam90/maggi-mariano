import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Chiusdino",
  canonical: links.servizi["trasporto-acqua"]["chiusdino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chiusdino", 
    locationNames: {label: "Chiusdino", href: "chiusdino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
