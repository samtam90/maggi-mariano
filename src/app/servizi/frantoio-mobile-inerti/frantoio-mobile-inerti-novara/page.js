import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Novara", 
    canonical: links.servizi["frantoio-mobile-inerti"]["novara"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Novara", 
    locationNames: {label: "Novara", href: "novara"}  
});
