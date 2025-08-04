import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vicenza", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vicenza"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vicenza", 
    locationNames: {label: "Vicenza", href: "vicenza"}  
});
