import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Taranto",
  canonical: links.servizi["spurgo-fosse-biologiche"]["taranto"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Taranto", 
    locationNames: {label: "Taranto", href: "taranto"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});
