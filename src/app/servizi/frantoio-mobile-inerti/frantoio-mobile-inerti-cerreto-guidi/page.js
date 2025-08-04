import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cerreto Guidi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cerreto-guidi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});
