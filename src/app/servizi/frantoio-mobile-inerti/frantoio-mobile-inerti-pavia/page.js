import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pavia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pavia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pavia", 
    locationNames: {label: "Pavia", href: "pavia"}  
});
