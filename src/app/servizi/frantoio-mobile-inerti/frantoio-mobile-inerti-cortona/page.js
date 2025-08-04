import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cortona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cortona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cortona", 
    locationNames: {label: "Cortona", href: "cortona"}  
});
