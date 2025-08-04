import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Monteleone di Spoleto", 
    canonical: links.servizi["frantoio-mobile-inerti"]["monteleone-di-spoleto"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monteleone di Spoleto", 
    locationNames: {label: "Monteleone di Spoleto", href: "monteleone-di-spoleto"}  
});
