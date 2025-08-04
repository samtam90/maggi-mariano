import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pordenone", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pordenone"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});
