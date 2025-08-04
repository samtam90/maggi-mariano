import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sellano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sellano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});
