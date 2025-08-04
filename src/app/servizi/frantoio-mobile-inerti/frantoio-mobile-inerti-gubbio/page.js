import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Gubbio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["gubbio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});
