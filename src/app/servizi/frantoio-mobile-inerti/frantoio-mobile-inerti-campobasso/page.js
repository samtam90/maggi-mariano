import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Campobasso", 
    canonical: links.servizi["frantoio-mobile-inerti"]["campobasso"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Campobasso", 
    locationNames: {label: "Campobasso", href: "campobasso"}  
});
