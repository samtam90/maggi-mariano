import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Foligno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["foligno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Foligno", 
    locationNames: {label: "Foligno", href: "foligno"}  
});
