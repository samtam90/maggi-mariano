import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Medio Campidano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["medio-campidano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
