import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lisciano Niccone",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lisciano-niccone"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lisciano Niccone", 
    locationNames: {label: "Lisciano Niccone", href: "lisciano-niccone"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
