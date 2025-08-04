import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Alessandria", 
    canonical: links.servizi["frantoio-mobile-inerti"]["alessandria"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});
