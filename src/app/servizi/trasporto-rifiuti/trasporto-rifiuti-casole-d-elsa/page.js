import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Casole d'Elsa",
  canonical: links.servizi["trasporto-rifiuti"]["casole-d-elsa"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Casole d'Elsa", 
    locationNames: {label: "Casole d'Elsa", href: "casole-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
