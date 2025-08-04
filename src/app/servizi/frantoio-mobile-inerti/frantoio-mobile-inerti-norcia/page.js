import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Norcia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["norcia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Norcia", 
    locationNames: {label: "Norcia", href: "norcia"}  
});
