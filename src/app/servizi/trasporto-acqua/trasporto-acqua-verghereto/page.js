import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Verghereto",
  canonical: links.servizi["trasporto-acqua"]["verghereto"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Verghereto", 
    locationNames: {label: "Verghereto", href: "verghereto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
