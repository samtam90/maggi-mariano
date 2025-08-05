import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Costacciaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["costacciaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
