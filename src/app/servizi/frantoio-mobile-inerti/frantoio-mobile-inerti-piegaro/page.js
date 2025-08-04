import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Piegaro", 
    canonical: links.servizi["frantoio-mobile-inerti"]["piegaro"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
