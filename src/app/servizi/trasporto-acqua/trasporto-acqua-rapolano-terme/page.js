import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Rapolano Terme",
  canonical: links.servizi["trasporto-acqua"]["rapolano-terme"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Rapolano Terme", 
    locationNames: {label: "Rapolano Terme", href: "rapolano-terme"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
