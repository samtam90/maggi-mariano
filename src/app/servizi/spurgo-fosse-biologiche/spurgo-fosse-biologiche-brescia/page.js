import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Brescia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["brescia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Brescia", 
    locationNames: {label: "Brescia", href: "brescia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
