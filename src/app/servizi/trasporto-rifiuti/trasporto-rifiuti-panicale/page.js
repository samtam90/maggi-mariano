import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Panicale",
  canonical: links.servizi["trasporto-rifiuti"]["panicale"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});