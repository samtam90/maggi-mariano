import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pienza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pienza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pienza", 
    locationNames: {label: "Pienza", href: "pienza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
