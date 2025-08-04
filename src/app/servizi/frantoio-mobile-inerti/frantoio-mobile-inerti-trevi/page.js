import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Trevi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["trevi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});
