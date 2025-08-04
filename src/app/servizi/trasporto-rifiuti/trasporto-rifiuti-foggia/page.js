import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Foggia",
  canonical: links.servizi["trasporto-rifiuti"]["foggia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});