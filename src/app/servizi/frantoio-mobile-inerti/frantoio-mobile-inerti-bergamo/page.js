import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bergamo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bergamo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"}  
});
