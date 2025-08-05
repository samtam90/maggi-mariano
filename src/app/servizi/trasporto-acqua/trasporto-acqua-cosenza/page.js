import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Cosenza",
  canonical: links.servizi["trasporto-acqua"]["cosenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
