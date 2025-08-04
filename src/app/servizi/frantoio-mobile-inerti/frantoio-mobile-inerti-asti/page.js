import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Asti", 
    canonical: links.servizi["frantoio-mobile-inerti"]["asti"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});
