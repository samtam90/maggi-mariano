import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Sarsina",
  canonical: links.servizi["trasporto-acqua"]["sarsina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sarsina", 
    locationNames: {label: "Sarsina", href: "sarsina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
