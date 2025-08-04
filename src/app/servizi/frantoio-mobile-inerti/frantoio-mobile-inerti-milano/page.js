import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Milano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["milano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});
