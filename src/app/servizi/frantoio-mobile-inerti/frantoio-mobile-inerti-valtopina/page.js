import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Valtopina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["valtopina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});
