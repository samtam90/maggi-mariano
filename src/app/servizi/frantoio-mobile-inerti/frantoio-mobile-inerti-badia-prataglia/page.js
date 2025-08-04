import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Badia Prataglia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["badia-prataglia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});
