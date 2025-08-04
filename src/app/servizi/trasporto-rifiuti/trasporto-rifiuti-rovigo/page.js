import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rovigo",
  canonical: links.servizi["trasporto-rifiuti"]["rovigo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});