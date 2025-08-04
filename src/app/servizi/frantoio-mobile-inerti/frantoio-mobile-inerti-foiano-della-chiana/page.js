import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Foiano della Chiana", 
    canonical: links.servizi["frantoio-mobile-inerti"]["foiano-della-chiana"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Foiano della Chiana", 
    locationNames: {label: "Foiano della Chiana", href: "foiano-della-chiana"}  
});
