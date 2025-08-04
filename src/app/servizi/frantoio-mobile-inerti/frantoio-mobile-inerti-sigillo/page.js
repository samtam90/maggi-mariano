import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Sigillo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["sigillo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
