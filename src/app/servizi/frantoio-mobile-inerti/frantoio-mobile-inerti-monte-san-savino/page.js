import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Monte San Savino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["monte-san-savino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
