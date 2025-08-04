import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Imperia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["imperia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
