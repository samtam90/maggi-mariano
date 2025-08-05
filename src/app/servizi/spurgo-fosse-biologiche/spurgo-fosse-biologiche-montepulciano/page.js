import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montepulciano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montepulciano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montepulciano", 
    locationNames: {label: "Montepulciano", href: "montepulciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
