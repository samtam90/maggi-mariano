import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Londa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["londa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Londa", 
    locationNames: {label: "Londa", href: "londa"}  
});
