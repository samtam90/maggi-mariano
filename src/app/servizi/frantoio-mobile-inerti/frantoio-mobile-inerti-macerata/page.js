import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Macerata", 
    canonical: links.servizi["frantoio-mobile-inerti"]["macerata"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Macerata", 
    locationNames: {label: "Macerata", href: "macerata"}  
});
