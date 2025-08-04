import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lucignano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lucignano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
