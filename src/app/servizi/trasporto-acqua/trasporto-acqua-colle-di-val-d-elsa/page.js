import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Colle di Val d'Elsa",
  canonical: links.servizi["trasporto-acqua"]["colle-di-val-d-elsa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Colle di Val d'Elsa", 
    locationNames: {label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
