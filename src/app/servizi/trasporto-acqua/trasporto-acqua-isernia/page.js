import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Isernia",
  canonical: links.servizi["trasporto-acqua"]["isernia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Isernia", 
    locationNames: {label: "Isernia", href: "isernia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});
