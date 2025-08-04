import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Mantova", 
    canonical: links.servizi["frantoio-mobile-inerti"]["mantova"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});
