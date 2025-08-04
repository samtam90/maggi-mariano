import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Collazzone",
  canonical: links.servizi["trasporto-rifiuti"]["collazzone"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});