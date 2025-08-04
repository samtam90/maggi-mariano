import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Treviso", 
    canonical: links.servizi["frantoio-mobile-inerti"]["treviso"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});
