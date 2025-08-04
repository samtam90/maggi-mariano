import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Poggiodomo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["poggiodomo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});
