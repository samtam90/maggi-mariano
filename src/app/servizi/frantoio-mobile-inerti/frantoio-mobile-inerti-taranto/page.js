import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Taranto", 
    canonical: links.servizi["frantoio-mobile-inerti"]["taranto"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
