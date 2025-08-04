import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cascia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cascia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cascia", 
    locationNames: {label: "Cascia", href: "cascia"}  
});
