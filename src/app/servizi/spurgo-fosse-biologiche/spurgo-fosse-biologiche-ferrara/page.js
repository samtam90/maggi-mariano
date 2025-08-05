import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ferrara",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ferrara"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
