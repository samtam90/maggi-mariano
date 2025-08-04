import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Valfabbrica", 
    canonical: links.servizi["frantoio-mobile-inerti"]["valfabbrica"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Valfabbrica", 
    locationNames: {label: "Valfabbrica", href: "valfabbrica"}  
});
