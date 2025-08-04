import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Signa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["signa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});
