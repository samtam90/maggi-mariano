import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cesa in valdichiana", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cesa-in-valdichiana"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});
