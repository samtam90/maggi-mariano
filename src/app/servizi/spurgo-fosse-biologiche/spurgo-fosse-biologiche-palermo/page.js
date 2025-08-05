import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Palermo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["palermo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Palermo", 
    locationNames: {label: "Palermo", href: "palermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
