import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Spello", 
    canonical: links.servizi["frantoio-mobile-inerti"]["spello"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Spello", 
    locationNames: {label: "Spello", href: "spello"}  
});
