import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Magione", 
    canonical: links.servizi["frantoio-mobile-inerti"]["magione"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});
