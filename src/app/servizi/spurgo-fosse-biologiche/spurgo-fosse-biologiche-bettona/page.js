import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bettona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bettona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bettona", 
    locationNames: {label: "Bettona", href: "bettona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
