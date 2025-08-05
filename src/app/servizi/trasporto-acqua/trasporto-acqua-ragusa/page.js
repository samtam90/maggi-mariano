import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Ragusa",
  canonical: links.servizi["trasporto-acqua"]["ragusa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
