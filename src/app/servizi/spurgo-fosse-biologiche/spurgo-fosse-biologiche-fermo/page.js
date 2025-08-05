import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fermo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fermo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fermo", 
    locationNames: {label: "Fermo", href: "fermo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
