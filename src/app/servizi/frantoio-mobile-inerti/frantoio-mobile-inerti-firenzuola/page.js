import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Firenzuola", 
    canonical: links.servizi["frantoio-mobile-inerti"]["firenzuola"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
