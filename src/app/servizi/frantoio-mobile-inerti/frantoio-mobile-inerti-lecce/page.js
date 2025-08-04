import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lecce", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lecce"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});
