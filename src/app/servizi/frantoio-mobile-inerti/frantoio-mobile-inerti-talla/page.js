import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Talla", 
    canonical: links.servizi["frantoio-mobile-inerti"]["talla"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});
