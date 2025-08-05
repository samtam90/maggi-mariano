import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lecce",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lecce"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lecce", 
    locationNames: {label: "Lecce", href: "lecce"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
