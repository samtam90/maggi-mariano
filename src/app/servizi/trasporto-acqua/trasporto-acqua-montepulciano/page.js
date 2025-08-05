import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montepulciano",
  canonical: links.servizi["trasporto-acqua"]["montepulciano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montepulciano", 
    locationNames: {label: "Montepulciano", href: "montepulciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
