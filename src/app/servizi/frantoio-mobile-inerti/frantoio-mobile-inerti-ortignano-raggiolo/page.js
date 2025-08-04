import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ortignano Raggiolo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ortignano-raggiolo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ortignano Raggiolo", 
    locationNames: {label: "Ortignano Raggiolo", href: "ortignano-raggiolo"}  
});
