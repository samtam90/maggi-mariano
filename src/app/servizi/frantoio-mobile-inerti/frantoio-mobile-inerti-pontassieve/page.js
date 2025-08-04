import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pontassieve", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pontassieve"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pontassieve", 
    locationNames: {label: "Pontassieve", href: "pontassieve"}  
});
