import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Modena", 
    canonical: links.servizi["frantoio-mobile-inerti"]["modena"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Modena", 
    locationNames: {label: "Modena", href: "modena"}  
});
