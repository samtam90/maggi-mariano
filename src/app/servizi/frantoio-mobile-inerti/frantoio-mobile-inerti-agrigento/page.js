import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Agrigento", 
    canonical: links.servizi["frantoio-mobile-inerti"]["agrigento"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});
