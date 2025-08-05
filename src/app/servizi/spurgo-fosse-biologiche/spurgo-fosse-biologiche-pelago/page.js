import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pelago",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pelago"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pelago", 
    locationNames: {label: "Pelago", href: "pelago"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
