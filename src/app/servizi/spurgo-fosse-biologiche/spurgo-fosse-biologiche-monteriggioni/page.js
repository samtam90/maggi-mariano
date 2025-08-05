import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monteriggioni",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monteriggioni"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monteriggioni", 
    locationNames: {label: "Monteriggioni", href: "monteriggioni"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
