import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pescara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pescara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pescara", 
    locationNames: {label: "Pescara", href: "pescara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
