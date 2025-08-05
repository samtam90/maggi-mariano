import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Gambettola",
  canonical: links.servizi["trasporto-acqua"]["gambettola"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gambettola", 
    locationNames: {label: "Gambettola", href: "gambettola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
