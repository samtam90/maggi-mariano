import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sellano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sellano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sellano", 
    locationNames: {label: "Sellano", href: "sellano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
