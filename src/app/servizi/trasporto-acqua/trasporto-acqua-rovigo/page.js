import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Rovigo",
  canonical: links.servizi["trasporto-acqua"]["rovigo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
