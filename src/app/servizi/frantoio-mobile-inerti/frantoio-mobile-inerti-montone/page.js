import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Montone", 
    canonical: links.servizi["frantoio-mobile-inerti"]["montone"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montone", 
    locationNames: {label: "Montone", href: "montone"}  
});
