import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Catanzaro", 
    canonical: links.servizi["frantoio-mobile-inerti"]["catanzaro"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Catanzaro", 
    locationNames: {label: "Catanzaro", href: "catanzaro"}  
});
