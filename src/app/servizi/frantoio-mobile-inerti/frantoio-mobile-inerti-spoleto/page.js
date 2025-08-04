import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Spoleto", 
    canonical: links.servizi["frantoio-mobile-inerti"]["spoleto"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});
