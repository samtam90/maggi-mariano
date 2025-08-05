import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Collazzone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["collazzone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
