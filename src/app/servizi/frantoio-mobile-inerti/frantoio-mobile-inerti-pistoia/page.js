import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pistoia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pistoia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
