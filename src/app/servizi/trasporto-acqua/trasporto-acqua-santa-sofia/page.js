import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Santa Sofia",
  canonical: links.servizi["trasporto-acqua"]["santa-sofia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Santa Sofia", 
    locationNames: {label: "Santa Sofia", href: "santa-sofia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
