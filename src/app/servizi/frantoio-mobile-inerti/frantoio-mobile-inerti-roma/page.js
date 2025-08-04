import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Roma", 
    canonical: links.servizi["frantoio-mobile-inerti"]["roma"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});
