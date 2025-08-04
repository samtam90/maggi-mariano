import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Citerna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["citerna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});
