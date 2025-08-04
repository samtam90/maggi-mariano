import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pisa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pisa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pisa", 
    locationNames: {label: "Pisa", href: "pisa"}  
});
