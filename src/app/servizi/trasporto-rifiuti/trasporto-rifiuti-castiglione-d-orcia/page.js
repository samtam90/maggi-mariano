import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Castiglione d'Orcia",
  canonical: links.servizi["trasporto-rifiuti"]["castiglione-d-orcia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Castiglione d'Orcia", 
    locationNames: {label: "Castiglione d'Orcia", href: "castiglione-d-orcia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
