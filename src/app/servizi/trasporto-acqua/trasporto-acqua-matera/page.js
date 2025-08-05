import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Matera",
  canonical: links.servizi["trasporto-acqua"]["matera"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Matera", 
    locationNames: {label: "Matera", href: "matera"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});
