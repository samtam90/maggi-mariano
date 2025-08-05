import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Gatteo",
  canonical: links.servizi["trasporto-acqua"]["gatteo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gatteo", 
    locationNames: {label: "Gatteo", href: "gatteo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
