import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ogliastra", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ogliastra"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"}  
});
