import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti San Godenzo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["san-godenzo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"}  
});
