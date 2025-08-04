import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Prato", 
    canonical: links.servizi["frantoio-mobile-inerti"]["prato"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Prato", 
    locationNames: {label: "Prato", href: "prato"}  
});
