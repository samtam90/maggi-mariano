import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Foggia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["foggia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Foggia", 
    locationNames: {label: "Foggia", href: "foggia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
