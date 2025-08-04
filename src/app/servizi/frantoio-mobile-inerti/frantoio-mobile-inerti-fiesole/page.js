import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Fiesole", 
    canonical: links.servizi["frantoio-mobile-inerti"]["fiesole"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
