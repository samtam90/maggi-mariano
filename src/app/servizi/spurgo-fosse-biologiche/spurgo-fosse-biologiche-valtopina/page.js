import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Valtopina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["valtopina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
