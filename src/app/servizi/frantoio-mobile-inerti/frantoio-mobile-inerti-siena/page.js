import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Siena", 
    canonical: links.servizi["frantoio-mobile-inerti"]["siena"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Siena", 
    locationNames: {label: "Siena", href: "siena"}  
});
