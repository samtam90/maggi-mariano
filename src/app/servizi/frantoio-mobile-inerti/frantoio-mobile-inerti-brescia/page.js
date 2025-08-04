import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Brescia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["brescia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Brescia", 
    locationNames: {label: "Brescia", href: "brescia"}  
});
