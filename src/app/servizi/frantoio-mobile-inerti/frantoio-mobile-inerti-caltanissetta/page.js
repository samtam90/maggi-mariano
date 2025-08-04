import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Caltanissetta", 
    canonical: links.servizi["frantoio-mobile-inerti"]["caltanissetta"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});
