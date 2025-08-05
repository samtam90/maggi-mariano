import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Corciano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["corciano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Corciano", 
    locationNames: {label: "Corciano", href: "corciano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
