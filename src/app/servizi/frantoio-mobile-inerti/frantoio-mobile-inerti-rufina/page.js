import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rufina", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rufina"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rufina", 
    locationNames: {label: "Rufina", href: "rufina"}  
});
