import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Colle di Val d'Elsa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["colle-di-val-d-elsa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Colle di Val d'Elsa", 
    locationNames: {label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
