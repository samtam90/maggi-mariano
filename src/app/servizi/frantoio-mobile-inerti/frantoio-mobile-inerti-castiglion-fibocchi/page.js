import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Castiglion Fibocchi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["castiglion-fibocchi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"}  
});
