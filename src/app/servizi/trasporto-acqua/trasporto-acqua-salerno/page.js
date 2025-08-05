import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Salerno",
  canonical: links.servizi["trasporto-acqua"]["salerno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Salerno", 
    locationNames: {label: "Salerno", href: "salerno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
