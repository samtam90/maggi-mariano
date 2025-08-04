import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Empoli", 
    canonical: links.servizi["frantoio-mobile-inerti"]["empoli"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
