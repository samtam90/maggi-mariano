import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Isernia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["isernia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});
