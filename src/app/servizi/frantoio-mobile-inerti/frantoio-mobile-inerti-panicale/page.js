import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Panicale", 
    canonical: links.servizi["frantoio-mobile-inerti"]["panicale"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Panicale", 
    locationNames: {label: "Panicale", href: "panicale"}  
});
