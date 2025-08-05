import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sovicille",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sovicille"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sovicille", 
    locationNames: {label: "Sovicille", href: "sovicille"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
