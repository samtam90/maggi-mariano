import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Caserta", 
    canonical: links.servizi["frantoio-mobile-inerti"]["caserta"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
