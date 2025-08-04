import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti San Giustino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["san-giustino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"}  
});
