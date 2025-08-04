import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rimini", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rimini"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});
