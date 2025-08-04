import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Umbertide", 
    canonical: links.servizi["frantoio-mobile-inerti"]["umbertide"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});
