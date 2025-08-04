import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Palermo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["palermo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Palermo", 
    locationNames: {label: "Palermo", href: "palermo"}  
});
