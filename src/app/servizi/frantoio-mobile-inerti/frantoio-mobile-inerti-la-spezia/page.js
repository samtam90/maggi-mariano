import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti La Spezia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["la-spezia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
