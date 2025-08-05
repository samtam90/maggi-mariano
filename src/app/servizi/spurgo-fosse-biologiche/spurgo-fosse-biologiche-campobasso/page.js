import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Campobasso",
  canonical: links.servizi["spurgo-fosse-biologiche"]["campobasso"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
