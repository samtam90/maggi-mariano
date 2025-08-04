import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Castelfranco Piandiscò", 
    canonical: links.servizi["frantoio-mobile-inerti"]["castelfranco-piandisco"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});
