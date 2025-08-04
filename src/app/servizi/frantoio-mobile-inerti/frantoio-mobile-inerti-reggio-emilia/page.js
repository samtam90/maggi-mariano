import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Reggio Emilia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["reggio-emilia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
