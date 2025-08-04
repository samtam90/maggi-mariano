import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Fermo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["fermo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Fermo", 
    locationNames: {label: "Fermo", href: "fermo"}  
});
