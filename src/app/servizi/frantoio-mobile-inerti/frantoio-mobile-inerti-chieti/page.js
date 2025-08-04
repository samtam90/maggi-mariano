import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Chieti", 
    canonical: links.servizi["frantoio-mobile-inerti"]["chieti"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Chieti", 
    locationNames: {label: "Chieti", href: "chieti"}  
});
