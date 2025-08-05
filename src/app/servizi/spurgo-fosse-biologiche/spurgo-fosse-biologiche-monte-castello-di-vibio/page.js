import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monte Castello di Vibio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monte-castello-di-vibio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
