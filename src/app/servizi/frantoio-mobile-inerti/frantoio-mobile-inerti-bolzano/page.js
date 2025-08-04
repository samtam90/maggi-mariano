import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bolzano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bolzano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});
