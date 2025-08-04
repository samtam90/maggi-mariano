import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Gorizia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["gorizia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Gorizia", 
    locationNames: {label: "Gorizia", href: "gorizia"}  
});
