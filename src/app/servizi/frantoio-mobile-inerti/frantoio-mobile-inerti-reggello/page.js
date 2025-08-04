import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Reggello", 
    canonical: links.servizi["frantoio-mobile-inerti"]["reggello"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Reggello", 
    locationNames: {label: "Reggello", href: "reggello"}  
});
