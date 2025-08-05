import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Teramo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["teramo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Teramo", 
    locationNames: {label: "Teramo", href: "teramo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["teramo"],
      name: "Teramo",
  }),
});
