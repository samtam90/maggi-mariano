import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bibbiena", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bibbiena"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bibbiena", 
    locationNames: {label: "Bibbiena", href: "bibbiena"}  
});
