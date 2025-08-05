import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Agrigento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["agrigento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
