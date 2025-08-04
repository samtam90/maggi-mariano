import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pelago", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pelago"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pelago", 
    locationNames: {label: "Pelago", href: "pelago"}  
});
