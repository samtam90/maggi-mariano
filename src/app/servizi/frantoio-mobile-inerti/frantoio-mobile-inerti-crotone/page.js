import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Crotone", 
    canonical: links.servizi["frantoio-mobile-inerti"]["crotone"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Crotone", 
    locationNames: {label: "Crotone", href: "crotone"}  
});
