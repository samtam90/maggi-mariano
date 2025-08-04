import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Reggello",
  canonical: links.servizi["trasporto-rifiuti"]["reggello"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});