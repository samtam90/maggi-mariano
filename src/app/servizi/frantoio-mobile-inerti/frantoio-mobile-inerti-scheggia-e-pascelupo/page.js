import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Scheggia e Pascelupo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["scheggia-e-pascelupo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});
