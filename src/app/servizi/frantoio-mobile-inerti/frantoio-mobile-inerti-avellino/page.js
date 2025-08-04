import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Avellino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["avellino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Avellino", 
    locationNames: {label: "Avellino", href: "avellino"}  
});
