import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Massa-Carrara", 
    canonical: links.servizi["frantoio-mobile-inerti"]["massa-carrara"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"}  
});
