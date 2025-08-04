import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Biella", 
    canonical: links.servizi["frantoio-mobile-inerti"]["biella"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});
