import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Potenza",
  canonical: links.servizi["trasporto-acqua"]["potenza"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Potenza", 
    locationNames: {label: "Potenza", href: "potenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
