import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catania",
  canonical: links.servizi["spurgo-fosse-biologiche"]["catania"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catania", 
    locationNames: {label: "Catania", href: "catania"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
