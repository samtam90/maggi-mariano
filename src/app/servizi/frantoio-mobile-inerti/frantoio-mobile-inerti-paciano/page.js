import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Paciano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["paciano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
