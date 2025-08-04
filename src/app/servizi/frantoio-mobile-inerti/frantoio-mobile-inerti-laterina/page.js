import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Laterina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["laterina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
