import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Ascoli Piceno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["ascoli-piceno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});
