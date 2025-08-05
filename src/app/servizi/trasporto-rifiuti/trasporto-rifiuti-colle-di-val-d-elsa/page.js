import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Colle di Val d'Elsa",
  canonical: links.servizi["trasporto-rifiuti"]["colle-di-val-d-elsa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Colle di Val d'Elsa", 
    locationNames: {label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
