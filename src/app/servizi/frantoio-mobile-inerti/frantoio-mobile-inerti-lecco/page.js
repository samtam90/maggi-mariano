import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lecco", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lecco"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});
