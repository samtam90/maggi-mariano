import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ravenna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ravenna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});
