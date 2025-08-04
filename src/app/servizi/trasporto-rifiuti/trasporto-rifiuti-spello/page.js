import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Spello",
  canonical: links.servizi["trasporto-rifiuti"]["spello"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});