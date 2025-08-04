import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Trieste", 
    canonical: links.servizi["frantoio-mobile-inerti"]["trieste"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Trieste", 
    locationNames: {label: "Trieste", href: "trieste"}  
});
