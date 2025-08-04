import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Foggia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["foggia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Foggia", 
    locationNames: {label: "Foggia", href: "foggia"}  
});
