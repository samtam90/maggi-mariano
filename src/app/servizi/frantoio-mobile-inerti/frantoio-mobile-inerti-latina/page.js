import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Latina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["latina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});
