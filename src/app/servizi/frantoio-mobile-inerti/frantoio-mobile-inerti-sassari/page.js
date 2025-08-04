import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sassari", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sassari"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});
