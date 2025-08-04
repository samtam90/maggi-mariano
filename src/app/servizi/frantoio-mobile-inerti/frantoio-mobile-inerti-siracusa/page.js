import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Siracusa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["siracusa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Siracusa", 
    locationNames: {label: "Siracusa", href: "siracusa"}  
});
