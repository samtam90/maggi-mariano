import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Barberino di Mugello", 
    canonical: links.servizi["frantoio-mobile-inerti"]["barberino-di-mugello"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Barberino di Mugello", 
    locationNames: {label: "Barberino di Mugello", href: "barberino-di-mugello"}  
});
