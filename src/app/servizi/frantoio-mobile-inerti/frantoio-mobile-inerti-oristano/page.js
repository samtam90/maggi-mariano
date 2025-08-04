import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Oristano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["oristano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Oristano", 
    locationNames: {label: "Oristano", href: "oristano"}  
});
