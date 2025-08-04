import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Venezia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["venezia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Venezia", 
    locationNames: {label: "Venezia", href: "venezia"}  
});
