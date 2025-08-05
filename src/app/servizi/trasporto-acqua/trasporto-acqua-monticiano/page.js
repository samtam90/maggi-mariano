import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Monticiano",
  canonical: links.servizi["trasporto-acqua"]["monticiano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monticiano", 
    locationNames: {label: "Monticiano", href: "monticiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
