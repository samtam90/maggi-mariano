import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Castiglion Fiorentino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["castiglion-fiorentino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
