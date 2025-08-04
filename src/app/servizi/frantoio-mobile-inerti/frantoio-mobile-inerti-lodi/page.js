import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lodi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lodi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lodi", 
    locationNames: {label: "Lodi", href: "lodi"}  
});
