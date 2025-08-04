import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pescara", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pescara"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});
