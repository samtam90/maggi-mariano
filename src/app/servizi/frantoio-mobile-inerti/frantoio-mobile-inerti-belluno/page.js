import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Belluno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["belluno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
