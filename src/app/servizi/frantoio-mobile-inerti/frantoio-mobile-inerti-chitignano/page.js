import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Chitignano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["chitignano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});
