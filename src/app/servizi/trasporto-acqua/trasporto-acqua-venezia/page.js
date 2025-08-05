import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Venezia",
  canonical: links.servizi["trasporto-acqua"]["venezia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Venezia", 
    locationNames: {label: "Venezia", href: "venezia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
