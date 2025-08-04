import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Benevento", 
    canonical: links.servizi["frantoio-mobile-inerti"]["benevento"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});
