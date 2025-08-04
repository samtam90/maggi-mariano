import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Frosinone", 
    canonical: links.servizi["frantoio-mobile-inerti"]["frosinone"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});
