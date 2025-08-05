import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Massa Martana",
  canonical: links.servizi["trasporto-acqua"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
