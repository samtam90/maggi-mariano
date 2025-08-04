import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Messina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["messina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});
