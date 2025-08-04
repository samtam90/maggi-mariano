import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Potenza", 
    canonical: links.servizi["frantoio-mobile-inerti"]["potenza"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});
