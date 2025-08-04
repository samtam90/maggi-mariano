import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lucca", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lucca"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lucca", 
    locationNames: {label: "Lucca", href: "lucca"}  
});
