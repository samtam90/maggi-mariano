import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Chieti",
  canonical: links.servizi["trasporto-rifiuti"]["chieti"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});