import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Montemignaio", 
    canonical: links.servizi["frantoio-mobile-inerti"]["montemignaio"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});
