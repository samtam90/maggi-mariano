import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Salerno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["salerno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Salerno", 
    locationNames: {label: "Salerno", href: "salerno"}  
});
