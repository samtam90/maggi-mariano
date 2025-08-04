import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Torgiano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["torgiano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Torgiano", 
    locationNames: {label: "Torgiano", href: "torgiano"}  
});
