import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Udine",
  canonical: links.servizi["trasporto-rifiuti"]["udine"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});