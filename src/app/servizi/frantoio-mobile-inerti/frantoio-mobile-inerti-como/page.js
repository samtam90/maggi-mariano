import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Como", 
    canonical: links.servizi["frantoio-mobile-inerti"]["como"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Como", 
    locationNames: {label: "Como", href: "como"}  
});
