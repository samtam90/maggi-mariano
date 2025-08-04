import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ferrara", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ferrara"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});
