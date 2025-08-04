import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sondrio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sondrio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sondrio", 
    locationNames: {label: "Sondrio", href: "sondrio"}  
});
