import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vallo di Nera", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vallo-di-nera"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
