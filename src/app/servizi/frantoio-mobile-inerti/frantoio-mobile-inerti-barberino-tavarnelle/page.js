import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Barberino Tavarnelle", 
    canonical: links.servizi["frantoio-mobile-inerti"]["barberino-tavarnelle"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Barberino Tavarnelle", 
    locationNames: {label: "Barberino Tavarnelle", href: "barberino-tavarnelle"}  
});
