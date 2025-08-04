import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Piacenza", 
    canonical: links.servizi["frantoio-mobile-inerti"]["piacenza"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
