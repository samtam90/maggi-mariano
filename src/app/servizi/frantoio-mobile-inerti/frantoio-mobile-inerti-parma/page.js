import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Parma", 
    canonical: links.servizi["frantoio-mobile-inerti"]["parma"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
