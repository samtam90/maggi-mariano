import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Civitella in Valdichiana", 
    canonical: links.servizi["frantoio-mobile-inerti"]["civitella-in-valdichiana"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Civitella in Valdichiana", 
    locationNames: {label: "Civitella in Valdichiana", href: "civitella-in-valdichiana"}  
});
