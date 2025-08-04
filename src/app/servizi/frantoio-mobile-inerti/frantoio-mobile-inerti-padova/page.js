import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Padova", 
    canonical: links.servizi["frantoio-mobile-inerti"]["padova"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});
