import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Capolona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["capolona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Capolona", 
    locationNames: {label: "Capolona", href: "capolona"}  
});
