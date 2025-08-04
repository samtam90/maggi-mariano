import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cavriglia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cavriglia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cavriglia", 
    locationNames: {label: "Cavriglia", href: "cavriglia"}  
});
