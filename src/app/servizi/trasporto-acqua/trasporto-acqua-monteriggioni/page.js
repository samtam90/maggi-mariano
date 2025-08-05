import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Monteriggioni",
  canonical: links.servizi["trasporto-acqua"]["monteriggioni"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monteriggioni", 
    locationNames: {label: "Monteriggioni", href: "monteriggioni"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
