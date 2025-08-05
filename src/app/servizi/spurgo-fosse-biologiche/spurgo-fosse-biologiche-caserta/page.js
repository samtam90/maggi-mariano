import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caserta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caserta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caserta", 
    locationNames: {label: "Caserta", href: "caserta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
