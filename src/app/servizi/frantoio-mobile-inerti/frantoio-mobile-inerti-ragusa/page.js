import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ragusa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ragusa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});
