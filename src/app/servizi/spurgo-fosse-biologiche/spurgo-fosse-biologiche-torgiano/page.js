import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Torgiano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["torgiano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
