import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Chieti",
  canonical: links.servizi["trasporto-acqua"]["chieti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Chieti", 
    locationNames: {label: "Chieti", href: "chieti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
