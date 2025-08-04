import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Matera", 
    canonical: links.servizi["frantoio-mobile-inerti"]["matera"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Matera", 
    locationNames: {label: "Matera", href: "matera"}  
});
