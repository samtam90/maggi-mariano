import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Pistoia",
  canonical: links.servizi["trasporto-acqua"]["pistoia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
