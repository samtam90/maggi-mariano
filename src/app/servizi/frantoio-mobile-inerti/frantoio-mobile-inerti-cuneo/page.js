import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cuneo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cuneo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});
