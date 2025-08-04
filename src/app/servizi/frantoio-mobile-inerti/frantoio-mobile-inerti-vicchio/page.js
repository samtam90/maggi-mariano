import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vicchio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vicchio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vicchio", 
    locationNames: {label: "Vicchio", href: "vicchio"}  
});
