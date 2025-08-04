import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Borgo San Lorenzo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["borgo-san-lorenzo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"}  
});
