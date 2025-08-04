import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Savona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["savona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
