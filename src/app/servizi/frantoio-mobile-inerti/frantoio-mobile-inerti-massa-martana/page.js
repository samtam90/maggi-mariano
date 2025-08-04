import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Massa Martana", 
    canonical: links.servizi["frantoio-mobile-inerti"]["massa-martana"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
