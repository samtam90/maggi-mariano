import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Alviano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["alviano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Alviano", 
    locationNames: {label: "Alviano", href: "alviano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
