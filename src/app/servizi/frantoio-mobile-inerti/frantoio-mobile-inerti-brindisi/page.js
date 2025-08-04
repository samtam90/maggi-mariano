import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Brindisi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["brindisi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"}  
});
