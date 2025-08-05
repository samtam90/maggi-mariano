import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Vicenza",
  canonical: links.servizi["trasporto-acqua"]["vicenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});
