import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Costacciaro", 
    canonical: links.servizi["frantoio-mobile-inerti"]["costacciaro"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Costacciaro", 
    locationNames: {label: "Costacciaro", href: "costacciaro"}  
});
