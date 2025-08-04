import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Poppi", 
    canonical: links.servizi["frantoio-mobile-inerti"]["poppi"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});
