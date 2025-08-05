import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lucca",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lucca"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lucca", 
    locationNames: {label: "Lucca", href: "lucca"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
