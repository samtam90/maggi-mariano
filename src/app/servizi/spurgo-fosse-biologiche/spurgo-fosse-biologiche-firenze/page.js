import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Firenze",
  canonical: links.servizi["spurgo-fosse-biologiche"]["firenze"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Firenze", 
    locationNames: {label: "Firenze", href: "firenze"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
