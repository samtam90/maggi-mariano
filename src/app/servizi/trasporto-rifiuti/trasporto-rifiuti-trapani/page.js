import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trapani",
  canonical: links.servizi["trasporto-rifiuti"]["trapani"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});