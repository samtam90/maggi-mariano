import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sestino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sestino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sestino", 
    locationNames: {label: "Sestino", href: "sestino"}  
});
