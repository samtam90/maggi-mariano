import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bagno a Ripoli", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bagno-a-ripoli"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});
