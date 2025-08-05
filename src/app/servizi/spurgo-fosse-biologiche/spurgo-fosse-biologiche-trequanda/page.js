import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trequanda",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trequanda"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trequanda", 
    locationNames: {label: "Trequanda", href: "trequanda"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
