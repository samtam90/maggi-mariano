import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Livorno",
  canonical: links.servizi["trasporto-rifiuti"]["livorno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Livorno", 
    locationNames: {label: "Livorno", href: "livorno"}  
});