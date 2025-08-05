import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Frosinone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["frosinone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
