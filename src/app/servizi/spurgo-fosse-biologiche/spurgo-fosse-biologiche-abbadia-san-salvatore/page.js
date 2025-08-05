import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Abbadia San Salvatore",
  canonical: links.servizi["spurgo-fosse-biologiche"]["abbadia-san-salvatore"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Abbadia San Salvatore", 
    locationNames: {label: "Abbadia San Salvatore", href: "abbadia-san-salvatore"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
