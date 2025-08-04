import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Marsciano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["marsciano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});
