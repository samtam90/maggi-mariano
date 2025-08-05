import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Poggibonsi",
  canonical: links.servizi["trasporto-acqua"]["poggibonsi"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Poggibonsi", 
    locationNames: {label: "Poggibonsi", href: "poggibonsi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
