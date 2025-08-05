import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Asti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["asti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Asti", 
    locationNames: {label: "Asti", href: "asti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
