import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Corciano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["corciano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Corciano", 
    locationNames: {label: "Corciano", href: "corciano"}  
});
