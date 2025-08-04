import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Impruneta", 
    canonical: links.servizi["frantoio-mobile-inerti"]["impruneta"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});
