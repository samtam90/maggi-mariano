import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Casole d'Elsa",
  canonical: links.servizi["trasporto-acqua"]["casole-d-elsa"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Casole d'Elsa", 
    locationNames: {label: "Casole d'Elsa", href: "casole-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
