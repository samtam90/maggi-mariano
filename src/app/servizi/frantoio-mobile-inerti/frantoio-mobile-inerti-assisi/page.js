import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Assisi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["assisi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});
