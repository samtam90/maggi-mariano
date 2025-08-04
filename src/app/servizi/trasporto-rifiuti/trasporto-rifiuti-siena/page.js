import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Siena",
  canonical: links.servizi["trasporto-rifiuti"]["siena"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});