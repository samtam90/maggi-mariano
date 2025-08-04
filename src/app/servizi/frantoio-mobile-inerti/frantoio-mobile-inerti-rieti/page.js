import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rieti", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rieti"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rieti", 
    locationNames: {label: "Rieti", href: "rieti"}  
});
