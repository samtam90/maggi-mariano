import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Trequanda",
  canonical: links.servizi["trasporto-acqua"]["trequanda"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Trequanda", 
    locationNames: {label: "Trequanda", href: "trequanda"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
