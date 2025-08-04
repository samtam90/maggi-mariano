import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Collazzone", 
    canonical: links.servizi["frantoio-mobile-inerti"]["collazzone"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Collazzone", 
    locationNames: {label: "Collazzone", href: "collazzone"}  
});
