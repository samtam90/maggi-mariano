import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Trevi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["trevi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Trevi", 
    locationNames: {label: "Trevi", href: "trevi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
