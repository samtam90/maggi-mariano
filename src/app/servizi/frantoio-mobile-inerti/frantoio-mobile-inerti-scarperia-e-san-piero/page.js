import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Scarperia e San Piero", 
    canonical: links.servizi["frantoio-mobile-inerti"]["scarperia-e-san-piero"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Scarperia e San Piero", 
    locationNames: {label: "Scarperia e San Piero", href: "scarperia-e-san-piero"}  
});
