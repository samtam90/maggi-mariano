import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Udine", 
    canonical: links.servizi["frantoio-mobile-inerti"]["udine"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Udine", 
    locationNames: {label: "Udine", href: "udine"}  
});
