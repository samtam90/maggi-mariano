import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Chianciano Terme",
  canonical: links.servizi["trasporto-acqua"]["chianciano-terme"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chianciano Terme", 
    locationNames: {label: "Chianciano Terme", href: "chianciano-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
