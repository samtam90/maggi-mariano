import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pesaro-Urbino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pesaro-urbino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
