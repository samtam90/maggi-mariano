import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Milano",
  canonical: links.servizi["trasporto-acqua"]["milano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Milano", 
    locationNames: {label: "Milano", href: "milano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
