import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Calenzano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["calenzano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
