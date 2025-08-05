import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Viscardo",
  canonical: links.servizi["trasporto-acqua"]["castel-viscardo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Viscardo", 
    locationNames: {label: "Castel Viscardo", href: "castel-viscardo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
