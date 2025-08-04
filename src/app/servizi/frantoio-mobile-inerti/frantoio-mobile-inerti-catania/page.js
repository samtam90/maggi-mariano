import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Catania", 
    canonical: links.servizi["frantoio-mobile-inerti"]["catania"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});
