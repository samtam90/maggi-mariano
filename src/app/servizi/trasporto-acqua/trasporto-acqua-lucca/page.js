import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Lucca",
  canonical: links.servizi["trasporto-acqua"]["lucca"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Lucca", 
    locationNames: {label: "Lucca", href: "lucca"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
