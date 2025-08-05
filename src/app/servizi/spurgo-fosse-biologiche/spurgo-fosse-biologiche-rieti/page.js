import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rieti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rieti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rieti", 
    locationNames: {label: "Rieti", href: "rieti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
