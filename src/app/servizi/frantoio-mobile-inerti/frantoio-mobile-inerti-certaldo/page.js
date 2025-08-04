import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Certaldo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["certaldo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
