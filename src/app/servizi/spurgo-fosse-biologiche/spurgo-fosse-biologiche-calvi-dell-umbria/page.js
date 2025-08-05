import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Calvi dell'Umbria",
  canonical: links.servizi["spurgo-fosse-biologiche"]["calvi-dell-umbria"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Calvi dell'Umbria", 
    locationNames: {label: "Calvi dell'Umbria", href: "calvi-dell-umbria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
