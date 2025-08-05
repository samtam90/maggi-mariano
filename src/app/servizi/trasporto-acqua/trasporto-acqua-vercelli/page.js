import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Vercelli",
  canonical: links.servizi["trasporto-acqua"]["vercelli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["vercelli"],
      name: "Vercelli",
  }),
});
