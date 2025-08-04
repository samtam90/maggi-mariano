import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cannara", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cannara"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cannara", 
    locationNames: {label: "Cannara", href: "cannara"}  
});
