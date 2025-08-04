import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Trapani", 
    canonical: links.servizi["frantoio-mobile-inerti"]["trapani"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Trapani", 
    locationNames: {label: "Trapani", href: "trapani"}  
});
