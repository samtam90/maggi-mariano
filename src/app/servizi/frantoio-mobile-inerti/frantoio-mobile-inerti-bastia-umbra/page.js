import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bastia Umbra", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bastia-umbra"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bastia Umbra", 
    locationNames: {label: "Bastia Umbra", href: "bastia-umbra"}  
});
