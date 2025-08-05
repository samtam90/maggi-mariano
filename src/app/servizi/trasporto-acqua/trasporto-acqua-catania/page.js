import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Catania",
  canonical: links.servizi["trasporto-acqua"]["catania"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Catania", 
    locationNames: {label: "Catania", href: "catania"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
