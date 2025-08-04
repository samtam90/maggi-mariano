import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Deruta", 
    canonical: links.servizi["frantoio-mobile-inerti"]["deruta"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});
