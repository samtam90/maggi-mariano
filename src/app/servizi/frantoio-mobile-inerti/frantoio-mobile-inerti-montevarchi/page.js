import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Montevarchi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["montevarchi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});
