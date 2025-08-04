import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bucine", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bucine"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});
