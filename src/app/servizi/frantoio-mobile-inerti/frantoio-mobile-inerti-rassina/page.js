import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rassina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rassina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});
