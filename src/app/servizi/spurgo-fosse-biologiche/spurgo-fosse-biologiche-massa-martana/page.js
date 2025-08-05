import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Massa Martana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["massa-martana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
