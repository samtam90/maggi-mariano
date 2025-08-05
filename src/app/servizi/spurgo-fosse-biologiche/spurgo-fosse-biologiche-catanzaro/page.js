import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Catanzaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["catanzaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
