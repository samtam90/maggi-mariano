import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Todi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["todi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});
