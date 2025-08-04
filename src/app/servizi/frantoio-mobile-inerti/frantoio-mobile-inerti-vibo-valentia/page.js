import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Vibo Valentia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["vibo-valentia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});
