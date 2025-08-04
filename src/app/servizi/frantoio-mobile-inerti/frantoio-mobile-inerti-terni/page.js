import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Terni", 
    canonical: links.servizi["frantoio-mobile-inerti"]["terni"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Terni", 
    locationNames: {label: "Terni", href: "terni"}  
});
