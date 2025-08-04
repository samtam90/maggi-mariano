import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Soci", 
    canonical: links.servizi["frantoio-mobile-inerti"]["soci"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Soci", 
    locationNames: {label: "Soci", href: "soci"}  
});
