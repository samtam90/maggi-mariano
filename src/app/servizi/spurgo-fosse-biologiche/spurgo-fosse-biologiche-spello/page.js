import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Spello",
  canonical: links.servizi["spurgo-fosse-biologiche"]["spello"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Spello", 
    locationNames: {label: "Spello", href: "spello"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
