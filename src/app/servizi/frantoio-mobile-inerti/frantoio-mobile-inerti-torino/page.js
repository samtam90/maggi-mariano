import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Torino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["torino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Torino", 
    locationNames: {label: "Torino", href: "torino"}  
});
