import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Potenza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["potenza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Potenza", 
    locationNames: {label: "Potenza", href: "potenza"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});
