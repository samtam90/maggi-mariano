import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bertinoro",
  canonical: links.servizi["trasporto-acqua"]["bertinoro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bertinoro", 
    locationNames: {label: "Bertinoro", href: "bertinoro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
