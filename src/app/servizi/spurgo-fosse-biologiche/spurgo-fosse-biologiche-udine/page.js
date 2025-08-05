import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Udine",
  canonical: links.servizi["spurgo-fosse-biologiche"]["udine"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Udine", 
    locationNames: {label: "Udine", href: "udine"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
