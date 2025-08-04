import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Cagliari", 
    canonical: links.servizi["frantoio-mobile-inerti"]["cagliari"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});
