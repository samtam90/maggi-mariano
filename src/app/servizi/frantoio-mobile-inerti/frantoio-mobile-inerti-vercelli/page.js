import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vercelli", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vercelli"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});
