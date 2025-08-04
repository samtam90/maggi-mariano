import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cremona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cremona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cremona", 
    locationNames: {label: "Cremona", href: "cremona"}  
});
