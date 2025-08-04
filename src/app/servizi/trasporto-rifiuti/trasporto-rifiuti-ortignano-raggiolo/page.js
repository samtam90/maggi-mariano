import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ortignano Raggiolo",
  canonical: links.servizi["trasporto-rifiuti"]["ortignano-raggiolo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});