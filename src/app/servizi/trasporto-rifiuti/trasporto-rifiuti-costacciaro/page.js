import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Costacciaro",
  canonical: links.servizi["trasporto-rifiuti"]["costacciaro"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});