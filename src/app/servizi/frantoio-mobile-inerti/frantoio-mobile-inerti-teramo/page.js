import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Teramo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["teramo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Teramo", 
    locationNames: {label: "Teramo", href: "teramo"}  
});
