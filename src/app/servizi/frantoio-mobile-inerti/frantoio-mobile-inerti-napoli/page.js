import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Napoli", 
    canonical: links.servizi["frantoio-mobile-inerti"]["napoli"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});
