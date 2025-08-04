import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Enna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["enna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});
