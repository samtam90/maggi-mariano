import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cosenza", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cosenza"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"}  
});
