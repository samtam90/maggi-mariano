import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Valfabbrica",
  canonical: links.servizi["spurgo-fosse-biologiche"]["valfabbrica"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
