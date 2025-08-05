import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rimini",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rimini"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rimini", 
    locationNames: {label: "Rimini", href: "rimini"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});
