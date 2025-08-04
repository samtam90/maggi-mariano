import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Marradi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["marradi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Marradi", 
    locationNames: {label: "Marradi", href: "marradi"}  
});
