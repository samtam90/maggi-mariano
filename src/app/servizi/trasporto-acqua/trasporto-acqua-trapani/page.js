import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Trapani",
  canonical: links.servizi["trasporto-acqua"]["trapani"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trapani", 
    locationNames: {label: "Trapani", href: "trapani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
