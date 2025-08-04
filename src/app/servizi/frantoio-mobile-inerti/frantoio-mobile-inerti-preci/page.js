import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Preci", 
    canonical: links.servizi["frantoio-mobile-inerti"]["preci"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Preci", 
    locationNames: {label: "Preci", href: "preci"}  
});
