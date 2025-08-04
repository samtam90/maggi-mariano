import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Anghiari", 
    canonical: links.servizi["frantoio-mobile-inerti"]["anghiari"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});
