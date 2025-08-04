import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Monterchi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["monterchi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monterchi", 
    locationNames: {label: "Monterchi", href: "monterchi"}  
});
