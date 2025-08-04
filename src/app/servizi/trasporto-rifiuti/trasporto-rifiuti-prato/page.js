import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Prato",
  canonical: links.servizi["trasporto-rifiuti"]["prato"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});