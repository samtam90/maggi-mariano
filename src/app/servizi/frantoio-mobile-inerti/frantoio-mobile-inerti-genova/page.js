import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Genova", 
    canonical: links.servizi["frantoio-mobile-inerti"]["genova"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});
