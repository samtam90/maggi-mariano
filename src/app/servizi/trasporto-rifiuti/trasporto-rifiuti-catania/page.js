import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Catania",
  canonical: links.servizi["trasporto-rifiuti"]["catania"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Catania", 
    locationNames: {label: "Catania", href: "catania"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
