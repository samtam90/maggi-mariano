import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Venezia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["venezia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Venezia", 
    locationNames: {label: "Venezia", href: "venezia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
