import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vinci", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vinci"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vinci", 
    locationNames: {label: "Vinci", href: "vinci"}  
});
