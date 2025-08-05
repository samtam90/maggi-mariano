import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castel Ritaldi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castel-ritaldi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
