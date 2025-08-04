import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Città della Pieve", 
    canonical: links.servizi["frantoio-mobile-inerti"]["città-della-pieve"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Città della Pieve", 
    locationNames: {label: "Città della Pieve", href: "città-della-pieve"}  
});
