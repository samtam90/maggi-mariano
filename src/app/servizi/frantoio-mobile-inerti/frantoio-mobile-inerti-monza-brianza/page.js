import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Monza Brianza", 
    canonical: links.servizi["frantoio-mobile-inerti"]["monza-brianza"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
