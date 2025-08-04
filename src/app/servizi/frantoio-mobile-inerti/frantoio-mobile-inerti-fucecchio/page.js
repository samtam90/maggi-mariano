import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Fucecchio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["fucecchio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Fucecchio", 
    locationNames: {label: "Fucecchio", href: "fucecchio"}  
});
