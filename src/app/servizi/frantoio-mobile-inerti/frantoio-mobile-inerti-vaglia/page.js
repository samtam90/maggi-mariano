import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vaglia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vaglia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});
