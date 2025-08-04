import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Nocera Umbra", 
    canonical: links.servizi["frantoio-mobile-inerti"]["nocera-umbra"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"}  
});
