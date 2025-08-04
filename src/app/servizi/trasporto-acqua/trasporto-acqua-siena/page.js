import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Siena",
  canonical: links.servizi["trasporto-acqua"]["siena"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});