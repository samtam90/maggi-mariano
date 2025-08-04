import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Badia Tedalda", 
    canonical: links.servizi["frantoio-mobile-inerti"]["badia-tedalda"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});
