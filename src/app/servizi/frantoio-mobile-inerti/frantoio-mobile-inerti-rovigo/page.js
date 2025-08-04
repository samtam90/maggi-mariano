import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rovigo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rovigo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"}  
});
