import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Subbiano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["subbiano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});
