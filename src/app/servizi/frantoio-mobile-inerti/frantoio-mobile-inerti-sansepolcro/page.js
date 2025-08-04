import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sansepolcro", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sansepolcro"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"}  
});
