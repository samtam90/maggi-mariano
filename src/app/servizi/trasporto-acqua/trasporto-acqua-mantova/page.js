import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Mantova",
  canonical: links.servizi["trasporto-acqua"]["mantova"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Mantova", 
    locationNames: {label: "Mantova", href: "mantova"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
