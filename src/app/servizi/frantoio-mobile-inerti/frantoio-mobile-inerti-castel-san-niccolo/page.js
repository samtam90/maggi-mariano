import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Castel San Niccolò", 
    canonical: links.servizi["frantoio-mobile-inerti"]["castel-san-niccolo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});
