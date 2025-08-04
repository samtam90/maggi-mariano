import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Scheggino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["scheggino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Scheggino", 
    locationNames: {label: "Scheggino", href: "scheggino"}  
});
