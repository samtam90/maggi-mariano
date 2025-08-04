import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Treviso",
  canonical: links.servizi["trasporto-rifiuti"]["treviso"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});