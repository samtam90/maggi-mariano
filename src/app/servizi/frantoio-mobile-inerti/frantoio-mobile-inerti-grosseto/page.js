import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Grosseto", 
    canonical: links.servizi["frantoio-mobile-inerti"]["grosseto"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});
