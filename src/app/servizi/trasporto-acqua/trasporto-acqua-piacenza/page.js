import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Piacenza",
  canonical: links.servizi["trasporto-acqua"]["piacenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
