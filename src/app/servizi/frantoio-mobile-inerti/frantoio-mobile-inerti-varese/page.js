import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Varese", 
    canonical: links.servizi["frantoio-mobile-inerti"]["varese"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Varese", 
    locationNames: {label: "Varese", href: "varese"}  
});
