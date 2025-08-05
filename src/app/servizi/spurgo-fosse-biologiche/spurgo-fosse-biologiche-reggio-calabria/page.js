import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggio Calabria",
  canonical: links.servizi["spurgo-fosse-biologiche"]["reggio-calabria"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
