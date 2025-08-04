import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bevagna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bevagna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});
