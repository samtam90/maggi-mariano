import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Crotone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["crotone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Crotone", 
    locationNames: {label: "Crotone", href: "crotone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
